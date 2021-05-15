

let newPartForm = document.getElementById("parts-list-form")


newPartForm.addEventListener("submit", function(event){
    event.preventDefault()
    createNewPart(event.target)
})





function createNewPart(part_info){
 


    fetch("http://localhost:3000/parts", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            part: {
                item: part_info[0].value,
                brand: part_info[1].value,
                model: part_info[2].value,
                price: part_info[3].value
            }
        })
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))   

}

// function fetchParts(){
//     fetch("http://localhost:3000/parts")
//     .then(resp => resp.json())
//     .then(resp => console.log(resp) )

// }