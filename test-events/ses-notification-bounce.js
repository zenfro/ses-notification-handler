// SNS Event
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
      "Sns": {
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
        "MessageAttributes": {}
      }
    }
  ]
}

// JSON.parse(Sns.Message)
{
  "notificationType":"Bounce",
  "bounce":{
     "bounceType":"Permanent",
     "bounceSubType":"General",
     "bouncedRecipients":[
        {
           "emailAddress":"bounce@simulator.amazonses.com",
           "action":"failed",
           "status":"5.1.1",
           "diagnosticCode":"smtp; 550 5.1.1 user unknown"
        }
     ],
     "timestamp":"2018-01-23T01:46:30.711Z",
     "feedbackId":"0100016120b1fb80-fb136aee-d492-4ac6-9584-49f8d9ed28db-000000",
     "remoteMtaIp":"205.251.242.49",
     "reportingMTA":"dsn; a8-70.smtp-out.amazonses.com"
  },
  "mail":{
     "timestamp":"2018-01-23T01:46:30.000Z",
     "source":"alexa.reactjs.dallas@gmail.com",
     "sourceArn":"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com",
     "sourceIp":"72.21.217.65",
     "sendingAccountId":"335055970032",
     "messageId":"0100016120b1f8e1-551db81a-95fd-40c4-90fe-426d40de6d2c-000000",
     "destination":[
        "bounce@simulator.amazonses.com"
     ],
     "headersTruncated":false,
     "headers":[
        {
           "name":"From",
           "value":"alexa.reactjs.dallas@gmail.com"
        },
        {
           "name":"To",
           "value":"bounce@simulator.amazonses.com"
        },
        {
           "name":"Subject",
           "value":"test bounce"
        },
        {
           "name":"MIME-Version",
           "value":"1.0"
        },
        {
           "name":"Content-Type",
           "value":"text/plain; charset=UTF-8"
        },
        {
           "name":"Content-Transfer-Encoding",
           "value":"7bit"
        }
     ],
     "commonHeaders":{
        "from":[
           "alexa.reactjs.dallas@gmail.com"
        ],
        "to":[
           "bounce@simulator.amazonses.com"
        ],
        "subject":"test bounce"
     }
  }
}