/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

const AWS = require('aws-sdk');
const messageProcessor = require('./messageProcessor');

AWS.config.update({ region: 'us-east-2' });

const handler = (event) => {
  const records = event.Records;

  if (!records) return;

  records.forEach((record) => {
    const sns = record.Sns;

    if (!sns || !sns.MessageId) {
      return;
    }

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
  });
};

module.exports = {
  handler,
};
