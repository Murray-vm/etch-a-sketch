const containerDiv = document.querySelector(".container")

function hoverChange(e) {
    console.log("hover")
    const block = e.target
    block.classList.add("coloredBlock")
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < 16; j++) {
            const block = document.createElement("div") 
            block.classList.add("block")
            
            block.addEventListener("mouseover", hoverChange)
            
            row.appendChild(block)




        }
        containerDiv.appendChild(row)
    }
}

createGrid()