// Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-C-sJkAq6IYkyn4k7tcbQZW-J6B6J8d33jEZuXl-cRIKhfBtFb0u_WhxsH9y9FvCB/exec';

export interface RoomServiceData {
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
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'roomService',
        ...data,
      }),
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
    const response = await fetch(GOOGLE_SCRIPT_URL, {
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
