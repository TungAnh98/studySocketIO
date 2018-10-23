$(document).ready(()=>{
   var socket = io.connect('http://localhost:8080');
   socket.on('greeting',(data)=>{
       alert(data)
   }) 
});