import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDTtaZvgzxcKmVz0d3d-GSQB8QXf_jA36w",
  authDomain: "key-web-63f1f.firebaseapp.com",
  projectId: "key-web-63f1f",
  storageBucket: "key-web-63f1f.firebasestorage.app",
  messagingSenderId: "555041543838",
  appId: "1:555041543838:web:5c5afb08fb3e0251e20d8f",
  measurementId: "G-V7RVKJZKE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let messaging;
if (typeof window !== "undefined" && "Notification" in window) {
  messaging = getMessaging(app);

  // Handle incoming messages
  onMessage(messaging, (payload) => {
    console.log("Message received: ", payload);
  });
} else {
  console.warn("Firebase Messaging is not supported in this environment.");
}

export { messaging };

// Function to generate FCM Token
export const genrateToken = async () => {
  if (!messaging) return console.warn("Messaging is not initialized.");

  const permission = await Notification.requestPermission();
  console.log(permission);
  
  if (permission === "granted") {
    try {
      const token = await getToken(messaging,{vapidKey:'BAyP6goTPY0qxoxejDxdvLd44E7v5UzvWrzkkcIrTWbp-UhsmlhYSTem20PNsJMvuVOD09bNq08n44_-y54iQ_A',})
      console.log("FCM Token:", token);
      return token;
    } catch (error) {
      console.error("Error generating FCM token:", error);
    }
  }
};
