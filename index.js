const socket = io("http://localhost:4000", {
    query: {
        key: ""
    }
})
const form = document.getElementById("message-form")
const messageChain = document.getElementById("message-chain")

socket.on("connect", () =>{
    console.log(socket.connected)
})

socket.on("room", (arg) =>{
    console.log(arg)
})

socket.on("broadcast", (arg) =>{
    console.log("receiving broadcast")
    const message = document.createElement("p")
    message.textContent = (arg)
    messageChain.append(message)
})

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    socket.emit("message", e.target.message.value)
})

fetch("http://localhost:4000")
    .then(r => r.json())
    .then(console.log)