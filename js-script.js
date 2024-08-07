const containerDiv = document.querySelector(".container")

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < 16; j++) {
            const block = document.createElement("div") 
            block.classList.add("block")
            row.appendChild(block)
        }
        containerDiv.appendChild(row)
    }
}

createGrid()