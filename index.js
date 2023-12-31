let socket;
const form = document.getElementById("message-form")
const messageChain = document.getElementById("message-chain")
const roomB = document.getElementById("room-b")
const roomA = document.getElementById("room-a")
console.log(roomB)

const connectSocket = (room) =>{
   socket = io("http://localhost:4000", {
        query: {
            room: room
        }
    })
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
}

roomB.addEventListener("click", () =>{
    console.log("b")
    connectSocket("b")
})

roomA.addEventListener("click", () =>{
    console.log("a")
    connectSocket("a")
})


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    socket.emit("message", e.target.message.value)
})

// fetch("http://localhost:4000")
//     .then(r => r.json())
//     .then(console.log)