const tipFilter = document.getElementById("tip-filter")

async function getTips() {
    try {
        const res = await fetch("http://localhost:2025/api/tips")
        const parsedData = await res.json()
        // console.log(parsedData)
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

function createTipCard(tip) {
    const tipContainer = document.getElementById("tip-tiles")
    const tipTile = document.createElement("article")
    const tipText = document.createElement("p")
    const tipAuthor = document.createElement("p")

    // Add classes
    tipTile.classList.add("tile")
    tipText.classList.add("text")
    tipAuthor.classList.add("text")

    //Populate content
    tipText.textContent = tip.tip
    tipAuthor.textContent = `Shared by: ${tip.name}`

    // Construct tile
    tipContainer.appendChild(tipTile) // Add tile to parent
    tipTile.appendChild(tipText) // Tip added to tile
    tipTile.appendChild(tipAuthor) // Author added to tile
}

async function renderCards() {
    try {
        const tips = await getTips()
        tips.forEach(tip => 
            createTipCard(tip)
        );
    } catch (error) {
    console.error(error.message)
    }
}

// Tip search bar

const filterTips = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase()
    const tipList = document.getElementById("tip-tiles")
    let tips = Array.from(tipList.children)
    
    tips.forEach((tip)=> {
        if (!tip.innerText.toLowerCase().includes(searchTerm)) {
            tip.style.display = "none"
        } else {
            tip.style.display = "block"
        }
    })
}

tipFilter.addEventListener("input", filterTips)

await renderCards()