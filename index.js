const socket = io("http://localhost:4000")

socket.on("connect", () =>{
    console.log(socket.connected)
})