# Google Apps Script Setup

## Copy this code into your Google Apps Script Editor

```javascript
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    if (data.type === 'roomService') {
      var sheet = ss.getSheetByName('Room Service');
      var services = data.services.join(', ');

      sheet.appendRow([
        new Date(),
        data.date,
        data.time,
        services,
        data.language
      ]);
    }
    else if (data.type === 'feedback') {
      var sheet = ss.getSheetByName('Feedback');

      // Auto-translate feedback to English if it's in another language
      var translatedFeedback = data.feedback;
      if (data.language !== 'en' && data.language !== 'au') {
        try {
          var sourceLang = '';
          switch(data.language) {
            case 'ru': sourceLang = 'ru'; break;
            case 'de': sourceLang = 'de'; break;
            case 'he': sourceLang = 'he'; break;
            default: sourceLang = ''; // auto-detect
          }

          translatedFeedback = LanguageApp.translate(data.feedback, sourceLang, 'en');
        } catch (translateError) {
          // If translation fails, keep original
          translatedFeedback = data.feedback + ' [Translation unavailable]';
        }
      }

      sheet.appendRow([
        new Date(),
        data.feedback,           // Original feedback
        translatedFeedback,      // Translated to English
        data.language
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Deployment Steps

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Set these options:
   - Description: "Hotel Guest Services API"
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access** and grant permissions
7. Copy the **Web app URL** - it will look like:
   `https://script.google.com/macros/s/XXXXX/exec`

## Important: If You Already Deployed

If you already deployed the script before, you need to create a **New Deployment** with this updated code:
1. Click **Deploy** → **Manage deployments**
2. Click **New deployment** (don't edit the existing one)
3. Follow steps above
4. Use the new URL in your React code

## Save this URL!
You'll need to paste it into the React code in the next step.
