// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDteDUM3HdZNIl8UCRlPbh96sEZpvr9YuY",
    authDomain: "webportfolio-bf8d9.firebaseapp.com",
    databaseURL: "https://webportfolio-bf8d9.firebaseio.com",
    projectId: "webportfolio-bf8d9",
    storageBucket: "webportfolio-bf8d9.appspot.com",
    messagingSenderId: "1066355591367",
    appId: "1:1066355591367:web:be7aea347d4726ce8716e2",
    measurementId: "G-LQB312P0CQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  window.onload = function () {
    document.getElementById('contact-form').addEventListener("submit", submitForm);
}

  var db_ref = firebase.database().ref('records');

  function getInput(id) {
      return document.getElementById(id).value;
  }
  
  function submitForm(e) {
      e.preventDefault();
      saveRec(getInput('input-name'), getInput('input-email'), getInput('input-subject'), getInput('input-message'));
      document.getElementById("contact-form").reset();
  }
  function saveRec(name, email, subject, message) {
      var newRec = db_ref.push();
      newRec.set({
          name: name,
          email: email,
          subject: subject,
          message: message
      });
  }