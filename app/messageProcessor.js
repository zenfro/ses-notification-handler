const getBounceListEntries = (sns) => {
  const entries = [];

  if (!sns.Type || sns.Type.toLowerCase() !== 'notification' || !sns.Message) {
    return entries;
  }

  const message = JSON.parse(sns.Message);

  if (!message || !message.notificationType) {
    return entries;
  }

  const snsMessageId = sns.MessageId;
  const sesMessageId = message.mail ? message.mail.messageId : null;
  const notificationType = message.notificationType.toLowerCase();

  let recipients;
  let reason;

  if (notificationType === 'complaint' && message.complaint) {
    recipients = message.complaint.complainedRecipients;
    reason = 'complaint';
  } else if (
    notificationType === 'bounce' &&
    message.bounce &&
    message.bounce.bounceType &&
    message.bounce.bounceType.toLowerCase() === 'permanent'
  ) {
    recipients = message.bounce.bouncedRecipients;
    reason = message.bounce.bounceSubType ? message.bounce.bounceSubType.toLowerCase() : '';
    if (!reason || reason === 'general') {
      reason = 'bounce';
    }
  }

  if (recipients) {
    recipients.forEach(recipient => entries.push({
      emailAddress: recipient.emailAddress,
      reason,
      snsMessageId,
      sesMessageId,
    }));
  }

  return entries;
};

module.exports = {
  getBounceListEntries,
};
