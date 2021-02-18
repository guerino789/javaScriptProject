const computerFormFields = 
`    <label><strong>Name: </strong></label><br/>
    <input type="text" id="name" required><br/>
    <textfeild id="name"></textfeild><br/>
;
`
class Computer {
    constructor(data) {
        this.id = data.id
        this.name = data.name;
    }

    static newComputerForm() {
        let newComputerFormDiv = document.getElementById('computer-form')
        newComputerFormDiv.innerHTML = `
        <form onsubmit="createComputer(); return false;">` +
            computerFormFields +
            `<input class="button" type="submit" value="Add New Computer">
        </form>
        <br/>`
    }
}

function getComputers() {
    fetch("http://localhost:3000/computers")
        .then(resp => resp.json())
        .then(data => {
            renderCompugetComputersHtml(data)
            addCompugetComputersClickListeners()
            addItemsClickListeners()
        })
}

function createCategory() {
    const computer = {
        name: document.getElementById('name').value
    }

    fetch("http://localhost:3000/computers", {
        method: 'POST',
        body: JSON.stringify(computer),
        // tells the client what vvv the content type of the returned content actually is.
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        // advertises which content types, expressed as MIME types, the ^^^ client is able to understand.
    })
        .then(resp => resp.json() )
        .then(computer => {
            clearComputersHtml()
            getComputers()
            Computer.newComputerForm()
        });
}

