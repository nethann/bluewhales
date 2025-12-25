# Final Setup Instructions

## ✅ What I've Done

1. Created Google Apps Script code ([GOOGLE_APPS_SCRIPT.md](GOOGLE_APPS_SCRIPT.md))
2. Updated your React app to send data to Google Sheets
3. Both Room Service requests and Feedback now save to Google Sheets

## 🚀 What You Need to Do

### Step 1: Set Up Google Sheets (5 minutes)

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named **"Blue Whales Hotel - Guest Services"**
3. Rename the first sheet to **"Room Service"**
4. Create a second sheet called **"Feedback"**

**Add headers to Room Service sheet:**
- A1: `Timestamp`
- B1: `Date`
- C1: `Time`
- D1: `Services`
- E1: `Language`

**Add headers to Feedback sheet:**
- A1: `Timestamp`
- B1: `Original Feedback`
- C1: `English Translation`
- D1: `Language`

### Step 2: Deploy Google Apps Script (5 minutes)

1. In your spreadsheet, click **Extensions → Apps Script**
2. Delete all code in the editor
3. Copy the code from [GOOGLE_APPS_SCRIPT.md](GOOGLE_APPS_SCRIPT.md)
4. Paste it into the Apps Script editor
5. Click **Deploy → New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**
10. Click **Authorize access** and grant permissions
11. **COPY THE WEB APP URL** - it looks like:
   `https://script.google.com/macros/s/XXXXX/exec`

### Step 3: Update React App (1 minute)

1. Open this file: [src/utils/googleSheets.ts](src/utils/googleSheets.ts)
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual URL (keep the quotes!)
4. Save the file

Example:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXX/exec';
```

### Step 4: Test It! (2 minutes)

1. Refresh your browser at http://localhost:5175/
2. Click **Room Service** → Fill out the form → Submit
3. Click the feedback section → Type something → Send
4. Check your Google Sheet - you should see new rows appear!

## 📊 What Your Spreadsheet Will Look Like

**Room Service Sheet:**
| Timestamp | Date | Time | Services | Language |
|-----------|------|------|----------|----------|
| 12/25/2024 10:30:00 | 2024-12-26 | 14:00 | Clean Toilet, Make Bed | English |

**Feedback Sheet (with Auto-Translation):**
| Timestamp | Original Feedback | English Translation | Language |
|-----------|------------------|---------------------|----------|
| 12/25/2024 10:35:00 | Отличный отель! | Excellent hotel! | Russian |
| 12/25/2024 10:36:00 | Great service! | Great service! | English |

## 🎉 That's It!

Once you complete Step 3, your hotel guest services app will automatically save all requests and feedback to your Google Spreadsheet in real-time!

You can access the spreadsheet from anywhere (phone, tablet, computer) to manage guest requests.
