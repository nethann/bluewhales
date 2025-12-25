// Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9lQ2DNePgak2WxIRLo1tHvYh6ipv9z9SRwUN32i-ulpA88j9tnx1sclW_2hCsndDd/exec';

export interface RoomServiceData {
  roomNumber: string;
  date: string;
  time: string;
  services: string[];
  language: string;
}

export interface FeedbackData {
  feedback: string;
  language: string;
}

export async function sendRoomServiceRequest(data: RoomServiceData): Promise<boolean> {
  try {
    const payload = {
      type: 'roomService',
      ...data,
    };

    console.log('Payload being sent to Google Sheets:', payload);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Note: With no-cors mode, we can't read the response
    // but if no error is thrown, the request was sent successfully
    return true;
  } catch (error) {
    console.error('Error sending room service request:', error);
    return false;
  }
}

export async function sendFeedback(data: FeedbackData): Promise<boolean> {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'feedback',
        ...data,
      }),
    });

    // Note: With no-cors mode, we can't read the response
    // but if no error is thrown, the request was sent successfully
    return true;
  } catch (error) {
    console.error('Error sending feedback:', error);
    return false;
  }
}
