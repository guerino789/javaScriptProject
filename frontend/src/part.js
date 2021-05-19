let newPartForm = document.getElementById("parts-list-form")
let rIndex, table = document.getElementById("parts-list")
let tr = document.getElementById("tr")


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
                price: part_info[3].value,
                computer_id: part_info[4].value

            }
        })
    })
    .then(resp => resp.json())
    .then(resp => renderPart(resp))   

}

function renderParts(parts){
    parts.forEach(element => {
        renderPart(element)
        selectedRowToInput();
        // createButtonElement(element)
    });
    
}

function renderPart(part){
    const partsList = document.getElementById("parts-list")
    const newRow = partsList.insertRow(partsList.length)
    const itemCell = newRow.insertCell(0)
    const brandCell = newRow.insertCell(1)
    const modelCell = newRow.insertCell(2)
    const priceCell = newRow.insertCell(3)

    itemCell.innerHTML = part.item
    brandCell.innerHTML = part.brand
    modelCell.innerHTML = part.model
    priceCell.innerHTML = part.price


    


    
}

function clearPartsHtml() {
    let partsIndex = document.getElementById("parts-list")
    partsIndex.innerHTML = ''
}

function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("item").value = this.cells[0].innerHTML;
                      document.getElementById("brand").value = this.cells[1].innerHTML;
                      document.getElementById("model").value = this.cells[2].innerHTML;
                      document.getElementById("price").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();



// function createButtonElement() {
//   var a = document.querySelectorAll('tr');

//   for (var v = 0; v < a.length; v++) {
//     var btn = document.createElement("button");

//     btn.appendChild(document.createTextNode("Delete Me"));
//     a[v].appendChild(btn);
//   }
// }