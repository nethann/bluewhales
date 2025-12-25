// Complete Google Apps Script for Blue Whales Hotel Guest App
// Copy this entire code into your Google Apps Script editor

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

---
Blue Whales Hotel Guest App
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

---
Blue Whales Hotel Guest App
  `;

  MailApp.sendEmail(recipient, subject, body);
}
