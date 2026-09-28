// Background push for the web app. Firebase looks for exactly this file at
// the site root; without it getToken() fails and no web device is ever
// registered. Options copied from lib/firebase_options.dart (web).
// SDK pin matches what firebase_core_web loads; re-check on firebase upgrades.
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCzAQSaMdOy6oIy5dGDs8-BVIiaDV-DBUQ',
  appId: '1:936244443785:web:c2a48816267c8c5847a458',
  messagingSenderId: '936244443785',
  projectId: 'bassiuz-games',
  authDomain: 'bassiuz-games.firebaseapp.com',
  storageBucket: 'bassiuz-games.firebasestorage.app',
  measurementId: 'G-S3FKVNVNHD',
});

firebase.messaging();
