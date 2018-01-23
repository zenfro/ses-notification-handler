// SNS Event
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
      "Sns": {
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
        "MessageAttributes": {}
      }
    }
  ]
}

// Sns.Message
{
  "notificationType":"Bounce",
  "bounce":{
     "bounceType":"Permanent",
     "bounceSubType":"Suppressed",
     "bouncedRecipients":[
        {
           "emailAddress":"suppressionlist@simulator.amazonses.com",
           "action":"failed",
           "status":"5.1.1",
           "diagnosticCode":"Amazon SES has suppressed sending to this address because it has a recent history of bouncing as an invalid address. For more information about how to remove an address from the suppression list, see the Amazon SES Developer Guide: http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppressionlist.html "
        }
     ],
     "timestamp":"2018-01-23T01:53:44.219Z",
     "feedbackId":"0100016120b898d0-2530040f-c556-4ceb-9627-8b18373e2b23-000000",
     "reportingMTA":"dns; amazonses.com"
  },
  "mail":{
     "timestamp":"2018-01-23T01:53:44.219Z",
     "source":"alexa.reactjs.dallas@gmail.com",
     "sourceArn":"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com",
     "sourceIp":"72.21.217.107",
     "sendingAccountId":"335055970032",
     "messageId":"0100016120b897b0-8f5dcb12-d048-4f4a-afa9-622afb089267-000000",
     "destination":[
        "suppressionlist@simulator.amazonses.com"
     ],
     "headersTruncated":false,
     "headers":[
        {
           "name":"From",
           "value":"alexa.reactjs.dallas@gmail.com"
        },
        {
           "name":"To",
           "value":"suppressionlist@simulator.amazonses.com"
        },
        {
           "name":"Subject",
           "value":"suppression test"
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
           "suppressionlist@simulator.amazonses.com"
        ],
        "subject":"suppression test"
     }
  }
}