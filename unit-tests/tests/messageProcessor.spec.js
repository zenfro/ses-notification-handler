/* eslint-disable quotes */
/* eslint-disable quote-props */

const should = require('chai').should();
const messageProcessor = require('../../app/messageProcessor');

describe('messageProcessor', () => {
  describe('getBounceListEntries()', () => {
    it('returns expected entries for bounce with 1 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "819e0bf1-c1e5-524c-973f-591157d32f9c",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Permanent\",\"bounceSubType\":\"General\",\"bouncedRecipients\":[{\"emailAddress\":\"bounce@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"smtp; 550 5.1.1 user unknown\"}],\"timestamp\":\"2018-01-23T01:46:30.711Z\",\"feedbackId\":\"0100016120b1fb80-fb136aee-d492-4ac6-9584-49f8d9ed28db-000000\",\"remoteMtaIp\":\"205.251.242.49\",\"reportingMTA\":\"dsn; a8-70.smtp-out.amazonses.com\"},\"mail\":{\"timestamp\":\"2018-01-23T01:46:30.000Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.65\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000\",\"destination\":[\"bounce@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"bounce@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"test bounce\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"bounce@simulator.amazonses.com\"],\"subject\":\"test bounce\"}}}",
        "Timestamp": "2018-01-23T01:46:30.753Z",
        "SignatureVersion": "1",
        "Signature": "Uq3erdPZWs6y1Ym45FhF51BoPYAbu2xbwbglLP9Pdtk6SjV7WcD8EdxTtfhFDE/f6hQ57UGQx8CMGr1FePy8BPXEt5O7a2/kclTtWjg0Kc91bQFIXtTFk7wNsIZPCXNHhggzECo+Sf1hka7T8Dz1xgbBX3ubCZ8IVWWDBEx6MvsBJqRu/98bvsGPFHbHP4TnuAcxrHyPbva8m1qUyh7ABvzsEzFNJ2EyCUmdu9Bog7l7zI/Xq2ePSiPp2ddFRBbbHKf/nvhCTloRo6QXxXbsS1W7r9QOXEzZhbhPyWr+JHIyigKnblg+qX9UhM7TAQQdlcRWGd6jpk4rEz9sC/TYzA==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'bounce@simulator.amazonses.com',
          reason: 'bounce',
          snsMessageId: '819e0bf1-c1e5-524c-973f-591157d32f9c',
          sesMessageId: '0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for bounce with 3 recipients', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "819e0bf1-c1e5-524c-973f-591157d32f9c",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Permanent\",\"bounceSubType\":\"General\",\"bouncedRecipients\":[{\"emailAddress\":\"bounce@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"smtp; 550 5.1.1 user unknown\"},{\"emailAddress\":\"foo@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"smtp; 550 5.1.1 user unknown\"},{\"emailAddress\":\"bar@gmail.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"smtp; 550 5.1.1 user unknown\"}],\"timestamp\":\"2018-01-23T01:46:30.711Z\",\"feedbackId\":\"0100016120b1fb80-fb136aee-d492-4ac6-9584-49f8d9ed28db-000000\",\"remoteMtaIp\":\"205.251.242.49\",\"reportingMTA\":\"dsn; a8-70.smtp-out.amazonses.com\"},\"mail\":{\"timestamp\":\"2018-01-23T01:46:30.000Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.65\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000\",\"destination\":[\"bounce@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"bounce@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"test bounce\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"bounce@simulator.amazonses.com\"],\"subject\":\"test bounce\"}}}",
        "Timestamp": "2018-01-23T01:46:30.753Z",
        "SignatureVersion": "1",
        "Signature": "Uq3erdPZWs6y1Ym45FhF51BoPYAbu2xbwbglLP9Pdtk6SjV7WcD8EdxTtfhFDE/f6hQ57UGQx8CMGr1FePy8BPXEt5O7a2/kclTtWjg0Kc91bQFIXtTFk7wNsIZPCXNHhggzECo+Sf1hka7T8Dz1xgbBX3ubCZ8IVWWDBEx6MvsBJqRu/98bvsGPFHbHP4TnuAcxrHyPbva8m1qUyh7ABvzsEzFNJ2EyCUmdu9Bog7l7zI/Xq2ePSiPp2ddFRBbbHKf/nvhCTloRo6QXxXbsS1W7r9QOXEzZhbhPyWr+JHIyigKnblg+qX9UhM7TAQQdlcRWGd6jpk4rEz9sC/TYzA==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'bounce@simulator.amazonses.com',
          reason: 'bounce',
          snsMessageId: '819e0bf1-c1e5-524c-973f-591157d32f9c',
          sesMessageId: '0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000',
        },
        {
          emailAddress: 'foo@simulator.amazonses.com',
          reason: 'bounce',
          snsMessageId: '819e0bf1-c1e5-524c-973f-591157d32f9c',
          sesMessageId: '0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000',
        },
        {
          emailAddress: 'bar@gmail.com',
          reason: 'bounce',
          snsMessageId: '819e0bf1-c1e5-524c-973f-591157d32f9c',
          sesMessageId: '0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for complaint with 1 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "22c7c8b7-36c4-5141-a20b-9a57a1b38b48",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Complaint\",\"complaint\":{\"complainedRecipients\":[{\"emailAddress\":\"complaint@simulator.amazonses.com\"}],\"timestamp\":\"2018-01-23T01:51:51.000Z\",\"feedbackId\":\"0100016120b6e211-8e271d78-1189-471a-862d-5766c785879a-000000\",\"userAgent\":\"Amazon SES Mailbox Simulator\",\"complaintFeedbackType\":\"abuse\"},\"mail\":{\"timestamp\":\"2018-01-23T01:51:51.901Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000\",\"destination\":[\"complaint@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"complaint@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"complaint test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"complaint@simulator.amazonses.com\"],\"subject\":\"complaint test\"}}}",
        "Timestamp": "2018-01-23T01:51:51.921Z",
        "SignatureVersion": "1",
        "Signature": "B49r4hDJLPEwvTAHUtcdxaQS3nfgqqOt09biUjsUOIANmTjB107riGNcRSRFCcdGfaSoEsQ4v4N6aVCbVKPDwrgwWqE+N1o9NkSOg/uM4FfU4ppllsC1G7gnabUF+jpAOBmVuZdvptpcHvifVXCiIHb1Z0z7U6P/1mVqI8pEjfb905XBOwC8SwxxcBFII+ghGpec3o4cWwQtED21gAKNUD4zg6wWD00z170053mskxRkw1Um8LEExwIqZzw9/IwxpnkMMxfysEVhG6pmGb7y+7kEi29pTV+Wr8LhsoIDJxnyDk8fU0dAkf92QYkYu3U7koy+9alHx8q4BpLR5hNkVw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'complaint@simulator.amazonses.com',
          reason: 'complaint',
          snsMessageId: '22c7c8b7-36c4-5141-a20b-9a57a1b38b48',
          sesMessageId: '0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for complaint with 3 recipients', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "22c7c8b7-36c4-5141-a20b-9a57a1b38b48",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Complaint\",\"complaint\":{\"complainedRecipients\":[{\"emailAddress\":\"complaint@simulator.amazonses.com\"},{\"emailAddress\":\"foo@simulator.amazonses.com\"},{\"emailAddress\":\"bar@simulator.amazonses.com\"}],\"timestamp\":\"2018-01-23T01:51:51.000Z\",\"feedbackId\":\"0100016120b6e211-8e271d78-1189-471a-862d-5766c785879a-000000\",\"userAgent\":\"Amazon SES Mailbox Simulator\",\"complaintFeedbackType\":\"abuse\"},\"mail\":{\"timestamp\":\"2018-01-23T01:51:51.901Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000\",\"destination\":[\"complaint@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"complaint@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"complaint test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"complaint@simulator.amazonses.com\"],\"subject\":\"complaint test\"}}}",
        "Timestamp": "2018-01-23T01:51:51.921Z",
        "SignatureVersion": "1",
        "Signature": "B49r4hDJLPEwvTAHUtcdxaQS3nfgqqOt09biUjsUOIANmTjB107riGNcRSRFCcdGfaSoEsQ4v4N6aVCbVKPDwrgwWqE+N1o9NkSOg/uM4FfU4ppllsC1G7gnabUF+jpAOBmVuZdvptpcHvifVXCiIHb1Z0z7U6P/1mVqI8pEjfb905XBOwC8SwxxcBFII+ghGpec3o4cWwQtED21gAKNUD4zg6wWD00z170053mskxRkw1Um8LEExwIqZzw9/IwxpnkMMxfysEVhG6pmGb7y+7kEi29pTV+Wr8LhsoIDJxnyDk8fU0dAkf92QYkYu3U7koy+9alHx8q4BpLR5hNkVw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'complaint@simulator.amazonses.com',
          reason: 'complaint',
          snsMessageId: '22c7c8b7-36c4-5141-a20b-9a57a1b38b48',
          sesMessageId: '0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000',
        },
        {
          emailAddress: 'foo@simulator.amazonses.com',
          reason: 'complaint',
          snsMessageId: '22c7c8b7-36c4-5141-a20b-9a57a1b38b48',
          sesMessageId: '0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000',
        },
        {
          emailAddress: 'bar@simulator.amazonses.com',
          reason: 'complaint',
          snsMessageId: '22c7c8b7-36c4-5141-a20b-9a57a1b38b48',
          sesMessageId: '0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for suppression list with 1 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "944da131-309e-5f02-851c-f3d1a776f5c9",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Permanent\",\"bounceSubType\":\"Suppressed\",\"bouncedRecipients\":[{\"emailAddress\":\"suppressionlist@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"Amazon SES has suppressed sending to this address because it has a recent history of bouncing as an invalid address. For more information about how to remove an address from the suppression list, see the Amazon SES Developer Guide: http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppressionlist.html \"}],\"timestamp\":\"2018-01-23T01:53:44.219Z\",\"feedbackId\":\"0100016120b898d0-2530040f-c556-4ceb-9627-8b18373e2b23-000000\",\"reportingMTA\":\"dns; amazonses.com\"},\"mail\":{\"timestamp\":\"2018-01-23T01:53:44.219Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000\",\"destination\":[\"suppressionlist@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"suppressionlist@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"suppression test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"suppressionlist@simulator.amazonses.com\"],\"subject\":\"suppression test\"}}}",
        "Timestamp": "2018-01-23T01:53:44.249Z",
        "SignatureVersion": "1",
        "Signature": "O/rZAAnTREgUrcJIuTmAYO7XjpBtdz5X/dZcyzbC8czjeHC32Z5pC7HANG+Cgcg17H2C3nqb5LdUhguuJUTEYLsPoaw3IWnL6h3ADOGIrL/slYcI4VgmGSIcpT8IqzhXhxkkBvJ/4jYDrsg/EzgeWXiRKueeDjmrSagA+6SiNFPQ/CUNEH97Nzbnqjo24m+WAjUCfFtT5bWLlXgSFZlnby8t344eBZGmjdv/baxkKn5QlCJD5UGgtNefjPJ2L3yvCL5BJScUGykczrV0zIleT+r83UBvUQeyQAn6C6ebIPWhdkvbjU59c6lOQ3bf/ROgGV5kiAlWTlJS5Xya+4rCFw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'suppressionlist@simulator.amazonses.com',
          reason: 'suppressed',
          snsMessageId: '944da131-309e-5f02-851c-f3d1a776f5c9',
          sesMessageId: '0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for suppression list with 3 recipients', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "944da131-309e-5f02-851c-f3d1a776f5c9",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Permanent\",\"bounceSubType\":\"Suppressed\",\"bouncedRecipients\":[{\"emailAddress\":\"suppressionlist@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"Amazon SES has suppressed sending to this address because it has a recent history of bouncing as an invalid address. For more information about how to remove an address from the suppression list, see the Amazon SES Developer Guide: http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppressionlist.html \"},{\"emailAddress\":\"foo@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"Amazon SES has suppressed sending to this address because it has a recent history of bouncing as an invalid address. For more information about how to remove an address from the suppression list, see the Amazon SES Developer Guide: http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppressionlist.html \"},{\"emailAddress\":\"bar@simulator.amazonses.com\",\"action\":\"failed\",\"status\":\"5.1.1\",\"diagnosticCode\":\"Amazon SES has suppressed sending to this address because it has a recent history of bouncing as an invalid address. For more information about how to remove an address from the suppression list, see the Amazon SES Developer Guide: http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppressionlist.html \"}],\"timestamp\":\"2018-01-23T01:53:44.219Z\",\"feedbackId\":\"0100016120b898d0-2530040f-c556-4ceb-9627-8b18373e2b23-000000\",\"reportingMTA\":\"dns; amazonses.com\"},\"mail\":{\"timestamp\":\"2018-01-23T01:53:44.219Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000\",\"destination\":[\"suppressionlist@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"suppressionlist@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"suppression test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"suppressionlist@simulator.amazonses.com\"],\"subject\":\"suppression test\"}}}",
        "Timestamp": "2018-01-23T01:53:44.249Z",
        "SignatureVersion": "1",
        "Signature": "O/rZAAnTREgUrcJIuTmAYO7XjpBtdz5X/dZcyzbC8czjeHC32Z5pC7HANG+Cgcg17H2C3nqb5LdUhguuJUTEYLsPoaw3IWnL6h3ADOGIrL/slYcI4VgmGSIcpT8IqzhXhxkkBvJ/4jYDrsg/EzgeWXiRKueeDjmrSagA+6SiNFPQ/CUNEH97Nzbnqjo24m+WAjUCfFtT5bWLlXgSFZlnby8t344eBZGmjdv/baxkKn5QlCJD5UGgtNefjPJ2L3yvCL5BJScUGykczrV0zIleT+r83UBvUQeyQAn6C6ebIPWhdkvbjU59c6lOQ3bf/ROgGV5kiAlWTlJS5Xya+4rCFw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
        {
          emailAddress: 'suppressionlist@simulator.amazonses.com',
          reason: 'suppressed',
          snsMessageId: '944da131-309e-5f02-851c-f3d1a776f5c9',
          sesMessageId: '0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000',
        },
        {
          emailAddress: 'foo@simulator.amazonses.com',
          reason: 'suppressed',
          snsMessageId: '944da131-309e-5f02-851c-f3d1a776f5c9',
          sesMessageId: '0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000',
        },
        {
          emailAddress: 'bar@simulator.amazonses.com',
          reason: 'suppressed',
          snsMessageId: '944da131-309e-5f02-851c-f3d1a776f5c9',
          sesMessageId: '0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000',
        },
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for ooto list with 1 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "73df020c-77a0-5366-8de4-50ece16c6b10",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Transient\",\"bounceSubType\":\"General\",\"bouncedRecipients\":[{\"emailAddress\":\"ooto@simulator.amazonses.com\"}],\"timestamp\":\"2018-01-23T01:49:00.000Z\",\"feedbackId\":\"0100016120b44372-5da3d87d-da41-4298-9b8d-e7373cfe41ec-000000\"},\"mail\":{\"timestamp\":\"2018-01-23T01:49:00.213Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b4420e-96079cf6-eccd-4561-b231-684e50fc82fc-000000\",\"destination\":[\"ooto@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"ooto@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"ooto test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"ooto@simulator.amazonses.com\"],\"subject\":\"ooto test\"}}}",
        "Timestamp": "2018-01-23T01:49:00.235Z",
        "SignatureVersion": "1",
        "Signature": "OqCk2KF7b72rE9NDgjNMk3UTmFPLIHY8RUJ8ANt1ZgsvI0CSBXaDuFIIekNNFCfHp+z/QT6Mq5/+xqh1ow6/JxESNq1ZUp2y9EGYkzMObCIarJgy/BpCehCdjC/7DLsuXFMorEhwJa9Q+dICJvIX8yoSx/358+dTFcDD0dxtsf3BTDVuh2UrRiuQoQ5vkC9BWbpJ+sWlQnMSmizl6H1ZRBK7GI2OCGZVEJpkGiFDyQBBq02kTwSiqQ//6kYweN03Oat9eai4kyBKR4JjCKiMLXlZY0+9MJ35bfRDHIPgoz4L2h03BRu0uzUa8x0Ou5TrNOJK02oIEjU5RRMObg8THQ==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for ooto list with 3 recipients', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "73df020c-77a0-5366-8de4-50ece16c6b10",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Bounce\",\"bounce\":{\"bounceType\":\"Transient\",\"bounceSubType\":\"General\",\"bouncedRecipients\":[{\"emailAddress\":\"ooto@simulator.amazonses.com\"},{\"emailAddress\":\"foo@simulator.amazonses.com\"},{\"emailAddress\":\"bar@simulator.amazonses.com\"}],\"timestamp\":\"2018-01-23T01:49:00.000Z\",\"feedbackId\":\"0100016120b44372-5da3d87d-da41-4298-9b8d-e7373cfe41ec-000000\"},\"mail\":{\"timestamp\":\"2018-01-23T01:49:00.213Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.107\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120b4420e-96079cf6-eccd-4561-b231-684e50fc82fc-000000\",\"destination\":[\"ooto@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"ooto@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"ooto test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"ooto@simulator.amazonses.com\"],\"subject\":\"ooto test\"}}}",
        "Timestamp": "2018-01-23T01:49:00.235Z",
        "SignatureVersion": "1",
        "Signature": "OqCk2KF7b72rE9NDgjNMk3UTmFPLIHY8RUJ8ANt1ZgsvI0CSBXaDuFIIekNNFCfHp+z/QT6Mq5/+xqh1ow6/JxESNq1ZUp2y9EGYkzMObCIarJgy/BpCehCdjC/7DLsuXFMorEhwJa9Q+dICJvIX8yoSx/358+dTFcDD0dxtsf3BTDVuh2UrRiuQoQ5vkC9BWbpJ+sWlQnMSmizl6H1ZRBK7GI2OCGZVEJpkGiFDyQBBq02kTwSiqQ//6kYweN03Oat9eai4kyBKR4JjCKiMLXlZY0+9MJ35bfRDHIPgoz4L2h03BRu0uzUa8x0Ou5TrNOJK02oIEjU5RRMObg8THQ==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {},
      };

      const expected = [
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for success list with 1 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "3dd2b730-92c3-5cb0-87e0-e5d00bd9803d",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Delivery\",\"mail\":{\"timestamp\":\"2018-01-23T01:58:50.519Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.159\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120bd4597-e7c1b5ca-ec86-491e-b087-11805f191434-000000\",\"destination\":[\"success@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"success@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"success test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"success@simulator.amazonses.com\"],\"subject\":\"success test\"}},\"delivery\":{\"timestamp\":\"2018-01-23T01:58:50.885Z\",\"processingTimeMillis\":366,\"recipients\":[\"success@simulator.amazonses.com\"],\"smtpResponse\":\"250 2.6.0 Message received\",\"remoteMtaIp\":\"205.251.242.49\",\"reportingMTA\":\"a8-195.smtp-out.amazonses.com\"}}",
        "Timestamp": "2018-01-23T01:58:50.984Z",
        "SignatureVersion": "1",
        "Signature": "Byr+PiGeZ8EQVNyWFzFMHN4E01xbwjvWPoXHoYmysmS/NyiM8hFSoxoNk2wrHToW13FVn3QYLF2hdr64SxHQSjk3x5UQhjOJLp/khntcXlZlnL1PfMCriGn4vA//QmHJkMU90aFNi/RtQzdOnumYAvVydJhTLVh8iaZHWAZPsvVAlzU7VE+QaJNr2N05xSJFrqAAHKalzMAg5mUfsnYYmJsi7cfvKd4aYZxzQd5mmXLB44LpUM3Aub3LOXiUgpyduWH7/1Ok8xS/vWxaJazSVO/GnuCjnSy3o85xIeSA1ssC1jNBby20d1kHqiiaxTUxKe8lKDpHku3ZdeZxJHwfAw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {}
      };

      const expected = [
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
    it('returns expected entries for success list with 3 recipient', () => {
      const sns = {
        "Type": "Notification",
        "MessageId": "3dd2b730-92c3-5cb0-87e0-e5d00bd9803d",
        "TopicArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications",
        "Subject": null,
        "Message": "{\"notificationType\":\"Delivery\",\"mail\":{\"timestamp\":\"2018-01-23T01:58:50.519Z\",\"source\":\"alexa.reactjs.dallas@gmail.com\",\"sourceArn\":\"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com\",\"sourceIp\":\"72.21.217.159\",\"sendingAccountId\":\"335055970032\",\"messageId\":\"0100016120bd4597-e7c1b5ca-ec86-491e-b087-11805f191434-000000\",\"destination\":[\"success@simulator.amazonses.com\",\"foo@simulator.amazonses.com\",\"bar@simulator.amazonses.com\"],\"headersTruncated\":false,\"headers\":[{\"name\":\"From\",\"value\":\"alexa.reactjs.dallas@gmail.com\"},{\"name\":\"To\",\"value\":\"success@simulator.amazonses.com\"},{\"name\":\"Subject\",\"value\":\"success test\"},{\"name\":\"MIME-Version\",\"value\":\"1.0\"},{\"name\":\"Content-Type\",\"value\":\"text/plain; charset=UTF-8\"},{\"name\":\"Content-Transfer-Encoding\",\"value\":\"7bit\"}],\"commonHeaders\":{\"from\":[\"alexa.reactjs.dallas@gmail.com\"],\"to\":[\"success@simulator.amazonses.com\"],\"subject\":\"success test\"}},\"delivery\":{\"timestamp\":\"2018-01-23T01:58:50.885Z\",\"processingTimeMillis\":366,\"recipients\":[\"success@simulator.amazonses.com\"],\"smtpResponse\":\"250 2.6.0 Message received\",\"remoteMtaIp\":\"205.251.242.49\",\"reportingMTA\":\"a8-195.smtp-out.amazonses.com\"}}",
        "Timestamp": "2018-01-23T01:58:50.984Z",
        "SignatureVersion": "1",
        "Signature": "Byr+PiGeZ8EQVNyWFzFMHN4E01xbwjvWPoXHoYmysmS/NyiM8hFSoxoNk2wrHToW13FVn3QYLF2hdr64SxHQSjk3x5UQhjOJLp/khntcXlZlnL1PfMCriGn4vA//QmHJkMU90aFNi/RtQzdOnumYAvVydJhTLVh8iaZHWAZPsvVAlzU7VE+QaJNr2N05xSJFrqAAHKalzMAg5mUfsnYYmJsi7cfvKd4aYZxzQd5mmXLB44LpUM3Aub3LOXiUgpyduWH7/1Ok8xS/vWxaJazSVO/GnuCjnSy3o85xIeSA1ssC1jNBby20d1kHqiiaxTUxKe8lKDpHku3ZdeZxJHwfAw==",
        "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
        "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
        "MessageAttributes": {}
      };

      const expected = [
      ];

      messageProcessor.getBounceListEntries(sns).should.deep.equal(expected);
    });
  });
});
