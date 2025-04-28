var firebaseConfig = {
  apiKey: "AIzaSyCvD0s5i7pRc9piT4V30wD7DKOGdHpH7W8",
  authDomain: "update-editor-chatbox.firebaseapp.com",
  databaseURL: "https://update-editor-chatbox-default-rtdb.firebaseio.com",
  projectId: "update-editor-chatbox",
  storageBucket: "update-editor-chatbox.appspot.com",
  messagingSenderId: "1008430172880",
  appId: "1:1008430172880:web:d697e3e5c208ad377decd5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "chat_room.html";
}

