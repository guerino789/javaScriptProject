

let newComputerForm = document.getElementById("new-computer-form")

newComputerForm.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log("event", event.target[0].value)
    createNewComputer(event.target)
})

function createNewComputer(computer_info){
    fetch("http://localhost:3000/computers", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            computer: {
                name: computer_info[0].value
            }
        })
    })

}
