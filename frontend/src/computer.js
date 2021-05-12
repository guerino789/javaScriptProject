

let newComputerForm = document.getElementById("new-computer-form")

newComputerForm.addEventListener("submit", function(event){
    event.preventDefault()
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
    .then(resp => resp.json())
    .then(resp => fetchComputers(resp))

}

function fetchComputers(){
    fetch("http://localhost:3000/computers")
    .then(resp => resp.json())
    .then(json => renderComputers(json))

}

fetchComputers();

function renderComputers(computers){
    const form = document.getElementById('computer-list')
    computers.forEach(element => {
        const h2 = document.createElement('h2')
        h2.innerHTML = element.name
        form.appendChild(h2);
        
    });
}


