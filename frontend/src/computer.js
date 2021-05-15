

let newComputerForm = document.getElementById("new-computer-form")
let computersList = document.getElementById("computer-list")
let btn = document.createElement("button")


newComputerForm.addEventListener("submit", function(event){
    event.preventDefault()
    createNewComputer(event.target)
})

computersList.addEventListener("button", function(event){
    event.preventDefault()
    renderComputer(event.target)
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
    .then(resp => resp.json())
    .then(resp => renderComputer(resp))

}

function fetchComputers(){
    fetch("http://localhost:3000/computers")
    .then(resp => resp.json())
    .then(json => renderComputers(json))

}

fetchComputers();

function renderComputers(computers){
    computers.forEach(element => renderComputer(element));
}

function renderComputer(computer){
    const computerList = document.getElementById('computer-list')
    const h2 = document.createElement('h2')
        h2.innerHTML = computer.name
        computerList.appendChild(h2);
}



