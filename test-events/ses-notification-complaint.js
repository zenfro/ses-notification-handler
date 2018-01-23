// SNS Event
{
  "Records": [
      {
          "EventSource": "aws:sns",
          "EventVersion": "1.0",
          "EventSubscriptionArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
          "Sns": {
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
              "MessageAttributes": {}
          }
      }
  ]
}

// Sns.Message
{
  "notificationType":"Complaint",
  "complaint":{
     "complainedRecipients":[
        {
           "emailAddress":"complaint@simulator.amazonses.com"
        }
     ],
     "timestamp":"2018-01-23T01:51:51.000Z",
     "feedbackId":"0100016120b6e211-8e271d78-1189-471a-862d-5766c785879a-000000",
     "userAgent":"Amazon SES Mailbox Simulator",
     "complaintFeedbackType":"abuse"
  },
  "mail":{
     "timestamp":"2018-01-23T01:51:51.901Z",
     "source":"alexa.reactjs.dallas@gmail.com",
     "sourceArn":"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com",
     "sourceIp":"72.21.217.107",
     "sendingAccountId":"335055970032",
     "messageId":"0100016120b6e088-043d10c1-7c0e-47d5-9abd-e1bc75c41e83-000000",
     "destination":[
        "complaint@simulator.amazonses.com"
     ],
     "headersTruncated":false,
     "headers":[
        {
           "name":"From",
           "value":"alexa.reactjs.dallas@gmail.com"
        },
        {
           "name":"To",
           "value":"complaint@simulator.amazonses.com"
        },
        {
           "name":"Subject",
           "value":"complaint test"
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
           "complaint@simulator.amazonses.com"
        ],
        "subject":"complaint test"
     }
  }
}