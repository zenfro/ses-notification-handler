/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

const AWS = require('aws-sdk');
const messageProcessor = require('./messageProcessor');

AWS.config.update({ region: 'us-east-1' });

const s3 = new AWS.S3();

const handler = (event) => {
  const records = event.Records;

  if (!records) return;

  records.forEach((record) => {
    const sns = record.Sns;

    if (!sns || !sns.MessageId) {
      return;
    }

    const s3key = sns.MessageId;

    const entries = messageProcessor.getBounceListEntries(sns);

    if (entries.length > 0) {
      const documentClient = new AWS.DynamoDB.DocumentClient();
      entries.forEach((entry) => {
        const params = {
          TableName: 'ses-bounce-list',
          Item: entry,
        };
        documentClient.put(params, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    }

    const s3params = {
      Bucket: 'ses-notifications-us-east-1-335055970032',
      Key: s3key,
      Body: sns.Message,
      ContentType: 'application/json',
    };

    s3.putObject(s3params, error => console.log(error));
  });
};

module.exports = {
  handler,
};
