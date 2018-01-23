// SNS Event
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-1:335055970032:ses-notifications:c8ae0ac5-5107-43bb-b40d-36b63da9b756",
      "Sns": {
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
      }
    }
  ]
}

// Sns.Message
{
  "notificationType":"Delivery",
  "mail":{
     "timestamp":"2018-01-23T01:58:50.519Z",
     "source":"alexa.reactjs.dallas@gmail.com",
     "sourceArn":"arn:aws:ses:us-east-1:335055970032:identity/alexa.reactjs.dallas@gmail.com",
     "sourceIp":"72.21.217.159",
     "sendingAccountId":"335055970032",
     "messageId":"0100016120bd4597-e7c1b5ca-ec86-491e-b087-11805f191434-000000",
     "destination":[
        "success@simulator.amazonses.com"
     ],
     "headersTruncated":false,
     "headers":[
        {
           "name":"From",
           "value":"alexa.reactjs.dallas@gmail.com"
        },
        {
           "name":"To",
           "value":"success@simulator.amazonses.com"
        },
        {
           "name":"Subject",
           "value":"success test"
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
           "success@simulator.amazonses.com"
        ],
        "subject":"success test"
     }
  },
  "delivery":{
     "timestamp":"2018-01-23T01:58:50.885Z",
     "processingTimeMillis":366,
     "recipients":[
        "success@simulator.amazonses.com"
     ],
     "smtpResponse":"250 2.6.0 Message received",
     "remoteMtaIp":"205.251.242.49",
     "reportingMTA":"a8-195.smtp-out.amazonses.com"
  }
}