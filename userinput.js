//how to accept user input
//1.easy way = window prompt
//2.professional way = html textbox
let username;
document.getElementById("mysubmit").onclick = function(){
 username = document.getElementById("text").value;
 document.getElementById("myh1").textContent = `HELLO ${username}`;
 console.log(username);
}