let baseUrl = 'http://localhost3000/parts';
let newPartForm = document.getElementById("parts-list-form")
let rIndex, table = document.getElementById("parts-list")
let tr = document.getElementById("tr")


newPartForm.addEventListener("submit", function(event){
    event.preventDefault()
    createNewPart(event.target)
})





function createNewPart(part_info){
 


    fetch("http://localhost:3000/parts" , {
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
                     
                      rIndex = this.rowIndex;
                      document.getElementById("item").value = this.cells[0].innerHTML;
                      document.getElementById("brand").value = this.cells[1].innerHTML;
                      document.getElementById("model").value = this.cells[2].innerHTML;
                      document.getElementById("price").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();

    function editHtmlTbleSelectedRow()
        {
         var item = document.getElementById("item").value,
             brand = document.getElementById("brand").value,
             model = document.getElementById("model").value,
             price = document.getElementById("price").value;
            
            table.rows[rIndex].cells[0].innerHTML = item;
            table.rows[rIndex].cells[1].innerHTML = brand;
            table.rows[rIndex].cells[2].innerHTML = model;
            table.rows[rIndex].cells[3].innerHTML = price;
            
        }   
            
            // function checkEmptyInput()
            // {
            //     var isEmpty = false,
            //         item = document.getElementById("item").value,
            //         brand = document.getElementById("brand").value,
            //         model = document.getElementById("model").value,
            //         price = document.getElementById("price").value;
            
            //     if(item === ""){
            //         alert("Item Can not Be Empty");
            //         isEmpty = true;
            //     }
            //     else if(brand === ""){
            //         alert("Brand Can not Be Empty");
            //         isEmpty = true;
            //     }
            //     else if(model === ""){
            //         alert("Model Can not Be Empty");
            //         isEmpty = true;
            //     }
            //     else if(price === ""){
            //         alert("Price can not be empty");
            //         isEmpty = true;
            //     }
            //     return isEmpty;
            // }



