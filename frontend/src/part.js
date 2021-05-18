

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
        // createButtonElement(element)
    });
    
}

function renderPart(part){
    const partsList = document.getElementById('parts-list')
    const tr = document.createElement('tr')
    const btn = document.createElement('button')
    const itemTd = document.createElement('td')
    const brandTd = document.createElement('td')
    const modelTd = document.createElement('td')
    const priceTd = document.createElement('td')

    itemTd.innerHTML = part.item
    brandTd.innerHTML = part.brand
    modelTd.innerHTML = part.model
    priceTd.innerHTML = part.price

    tr.appendChild(itemTd)
    tr.appendChild(brandTd)
    tr.appendChild(modelTd)
    tr.appendChild(priceTd)

    partsList.appendChild(tr)

    selectedRowToInput();

    
}

function clearPartsHtml() {
    let partsIndex = document.getElementById("parts-list")
    partsIndex.innerHTML = ''
}

function selectedRowToInput()
            {
                let rowIndex,table = document.getElementById('parts-list')
                for(var i = 0; i < table.rows.lenght; i++)
                {
                    table.rows[i].onclick = function(){
                      rIndex = this.rowIndex;  
                      document.getElementById("item").value = this.itemTd[0].innerHTML;
                      document.getElementById("brand").value = this.brandTd[1].innerHTML;
                      document.getElementById("model").value = this.modelTd[2].innerHTML;
                      document.getElementById("price").value = this.priceTd[3].innerHTML;
                      
                    }
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
