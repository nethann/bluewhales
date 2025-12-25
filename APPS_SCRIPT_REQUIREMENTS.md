# Google Apps Script Requirements

## Email Notifications

**IMPORTANT:** Every new submission (both Feedback and Room Service) must trigger an email notification.

### Email Configuration

- **Recipient Email:** nethan.nagendran@gmail.com
- **Trigger:** On every new row added to the Google Sheet (both feedback and room service sheets)

### Implementation Requirements

1. **For Room Service Submissions:**
   - Send email to: nethan.nagendran@gmail.com
   - Email should include:
     - Room Number
     - Date
     - Time
     - Selected Services
     - Submission timestamp
     - Language

2. **For Feedback Submissions:**
   - Send email to: nethan.nagendran@gmail.com
   - Email should include:
     - Feedback content
     - Submission timestamp
     - Language

### Google Apps Script Implementation

You need to add an email notification trigger in your Google Apps Script. Here's a sample implementation:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'roomService') {
      // Add to Room Service sheet
      const roomServiceSheet = sheet.getSheetByName('Room Service') || sheet.insertSheet('Room Service');
      const timestamp = new Date();

      roomServiceSheet.appendRow([
        timestamp,
        data.roomNumber,
        data.date,
        data.time,
        data.services.join(', '),
        data.language
      ]);

      // Send email notification
      sendRoomServiceEmail(data, timestamp);

    } else if (data.type === 'feedback') {
      // Add to Feedback sheet
      const feedbackSheet = sheet.getSheetByName('Feedback') || sheet.insertSheet('Feedback');
      const timestamp = new Date();

      feedbackSheet.appendRow([
        timestamp,
        data.feedback,
        data.language
      ]);

      // Send email notification
      sendFeedbackEmail(data, timestamp);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendRoomServiceEmail(data, timestamp) {
  const recipient = 'nethan.nagendran@gmail.com';
  const subject = `New Room Service Request - Room ${data.roomNumber}`;
  const body = `
    New Room Service Request Received

    Timestamp: ${timestamp}
    Room Number: ${data.roomNumber}
    Date: ${data.date}
    Time: ${data.time}
    Services Requested: ${data.services.join(', ')}
    Language: ${data.language}
  `;

  MailApp.sendEmail(recipient, subject, body);
}

function sendFeedbackEmail(data, timestamp) {
  const recipient = 'nethan.nagendran@gmail.com';
  const subject = 'New Guest Feedback Received';
  const body = `
    New Feedback Received

    Timestamp: ${timestamp}
    Feedback: ${data.feedback}
    Language: ${data.language}
  `;

  MailApp.sendEmail(recipient, subject, body);
}
```

### Setup Instructions

1. Open your Google Apps Script editor
2. Replace the existing `doPost` function with the code above
3. Add the `sendRoomServiceEmail` and `sendFeedbackEmail` functions
4. Deploy the script as a web app
5. Test with a submission to ensure emails are being sent

### Notes

- Make sure the Google Apps Script has permission to send emails
- The email will be sent from your Google account
- Update the sheet names ('Room Service' and 'Feedback') if they differ in your implementation
