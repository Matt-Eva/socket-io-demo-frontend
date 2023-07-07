const socket = io("http://localhost:4000")
const form = document.getElementById("message-form")
const messageChain = document.getElementById("message-chain")

socket.on("connect", () =>{
    console.log(socket.connected)
})

socket.on("broadcast", (arg) =>{
    const message = document.createElement("p")
    message.textContent = (arg)
    messageChain.append(message)
})

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.log(e.target.message.value)
    socket.emit("message", e.target.message.value)
})

fetch("http://localhost:4000")
    .then(r => r.json())
    .then(console.log)