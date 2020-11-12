document.getElementById("send").addEventListener("click",function sendMsg() {
    let name = document.getElementById("fName").value;
    alert('Thank you '+name+', your message has been sent to us and you will soon receive a reply!');
    clearForm();
});

function clearForm() {
    document.getElementById("fName").value='';
    document.getElementById("lName").value='';
    document.getElementById("subject").value='';
    document.getElementById("message").value='';
};