document.getElementById("send").addEventListener("click", function sendMsg() {
  let name = document.getElementById("fName").value;
  alert(
    "Thank you " +
      name +
      ", your message has been sent to us and you will soon receive a reply!"
  );
  clearForm();
});

function clearForm() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

upcoming = document.getElementById("upcoming");
upShows = document.getElementById("upShows");
past = document.getElementById("past");
paShows = document.getElementById("paShows");

function change(e) {
  if (e.id == "upcoming") {
    upShows.style.display = "block";
    paShows.style.display = "none";
    upcoming.style.color = "white";
    past.style.color = "grey";
  }
  if (e.id == "past") {
    upShows.style.display = "none";
    paShows.style.display = "block";
    upcoming.style.color = "grey";
    past.style.color = "white";
  }
}

function notify() {
  alert("Thanks for your interest, you'll get notified for this event!");
}
