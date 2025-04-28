
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}


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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
