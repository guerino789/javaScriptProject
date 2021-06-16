
let newPartForm = document.getElementById("parts-list-form")
let rIndex, table = document.getElementById("parts-list")
let addAction = document.getElementById("add")
let updateAction = document.getElementById("update")
let deleteAction = document.getElementById("delete")
let tr = document.getElementById("tr")

class Part {
    constructor(data) {
        this.id = data.id
        this.item = data.item
        this.brand = data.brand
        this.model = data.model
        this.price = data.price
        this.computer_id = data.computer_id
    }

}



addAction.addEventListener("click", function(event){
    event.preventDefault()
    addPart(event.target)
    clearPartsForm()
})

updateAction.addEventListener("click", function(event){
    event.preventDefault()
    updatePart(event.target)
    clearPartsForm()
})

deleteAction.addEventListener("click", function(event){
    event.preventDefault()
    deletePart(event.target)
    clearPartsForm()
})




function addPart(){
    let item = document.getElementById("item").value,
        brand = document.getElementById("brand").value,
        model = document.getElementById("model").value,
        price = document.getElementById("price").value,
        computer_id = document.getElementById("computerId").value;
    let part = new Part ({
        item,
        brand,
        model,
        price,
        computer_id

   })
   

    fetch("http://localhost:3000/parts" , {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            part
        })
    })
    .then(resp => resp.json())
    .then(resp => renderPart(resp))   

}

function updateParts(part){
    fetch(`http://localhost:3000/parts/${part.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
             accepts: "application/json"
     },
     body: JSON.stringify({part: part})
    })
    .then(resp => resp.json())
    .then(resp => editHtmlTbleSelectedRow(resp))
}

function renderParts(parts){
    parts.forEach(element => {
        renderPart(element)
        selectedRowToInput()
        
        
    });
    
}

function deletePart(){
    partId = document.getElementById("partId").value;
    fetch(`http://localhost:3000/parts/${partId}`, {
        method: "DELETE",
    })
    table.rows[rIndex].remove()

}


function renderPart(part){
    const partsList = document.querySelector("#parts-list>tbody")
    const newRow = partsList.insertRow(partsList.length)
    const itemCell = newRow.insertCell(0)
    const brandCell = newRow.insertCell(1)
    const modelCell = newRow.insertCell(2)
    const priceCell = newRow.insertCell(3)
    const idCell = newRow.insertCell(4)

    itemCell.innerHTML = part.item
    brandCell.innerHTML = part.brand
    modelCell.innerHTML = part.model
    priceCell.innerHTML = part.price
    idCell.innerHTML = part.id
    
}

function clearPartsHtml() {
    let partsIndex = document.querySelector("#parts-list>tbody")
    partsIndex.innerHTML = ''
 }

 function clearPartsForm() {
    document.getElementById("item").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("model").value = ""
    document.getElementById("price").value = ""
 }

function selectedRowToInput() {
                
    for(var i = 1; i < table.rows.length; i++)
                {
        table.rows[i].onclick = function()
            {
                rIndex = this.rowIndex;
                document.getElementById("item").value = this.cells[0].innerHTML;
                document.getElementById("brand").value = this.cells[1].innerHTML;
                document.getElementById("model").value = this.cells[2].innerHTML;
                document.getElementById("price").value = this.cells[3].innerHTML;
                document.getElementById("partId").value = this.cells[4].innerHTML;
                };
            }
}
            

    function updatePart() {
         let item = document.getElementById("item").value,
             brand = document.getElementById("brand").value,
             model = document.getElementById("model").value,
             price = document.getElementById("price").value,
             partId = document.getElementById("partId").value;
        let part = new Part( {
            item,
            brand,
            model,
            price
        })
            
            table.rows[rIndex].cells[0].innerHTML = item;
            table.rows[rIndex].cells[1].innerHTML = brand;
            table.rows[rIndex].cells[2].innerHTML = model;
            table.rows[rIndex].cells[3].innerHTML = price;

            fetch(`http://localhost:3000/parts/${partId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
             accepts: "application/json"
     },
     body: JSON.stringify({part
        })
    })


}



            
        
            
        



