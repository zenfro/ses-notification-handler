// SNS Event
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
      "Sns": {
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
        "MessageAttributes": {}
      }
    }
  ]
}

// Sns.Message
{
  "notificationType":"Bounce",
  "bounce":{
     "bounceType":"Transient",
     "bounceSubType":"General",
     "bouncedRecipients":[
        {
           "emailAddress":"ooto@simulator.amazonses.com"
        }
     ],
     "timestamp":"2018-01-23T01:49:00.000Z",
     "feedbackId":"0100016120b44372-5da3d87d-da41-4298-9b8d-e7373cfe41ec-000000"
  },
  "mail":{
     "timestamp":"2018-01-23T01:49:00.213Z",
     "source":"alexa.reactjs.dallas@gmail.com",
     "sourceArn":"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com",
     "sourceIp":"72.21.217.107",
     "sendingAccountId":"335055970032",
     "messageId":"0100016120b4420e-96079cf6-eccd-4561-b231-684e50fc82fc-000000",
     "destination":[
        "ooto@simulator.amazonses.com"
     ],
     "headersTruncated":false,
     "headers":[
        {
           "name":"From",
           "value":"alexa.reactjs.dallas@gmail.com"
        },
        {
           "name":"To",
           "value":"ooto@simulator.amazonses.com"
        },
        {
           "name":"Subject",
           "value":"ooto test"
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
           "ooto@simulator.amazonses.com"
        ],
        "subject":"ooto test"
     }
  }
}