

let newComputerForm = document.getElementById("new-computer-form")
let computersList = document.getElementById("computer-list")



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
    const computerList = document.getElementById('computers')
    const setDropDown = document.createElement('option')
    setDropDown.setAttribute('value', computer.id)
    setDropDown.innerHTML = computer.name
    computerList.appendChild(setDropDown)
    computerList.onchange = function(){
                document.getElementById("computerId").value = computerList.value
                clearPartsHtml()
                fetchComputer(computerList.value)
            }


}
l

function fetchComputer(computerId){
    fetch(`http://localhost:3000/computers/${computerId}`)
    .then(resp => resp.json())
    .then(json => renderParts(json.parts))

}



