const form = document.querySelector("form")
const close = document.getElementById("closeBtn")

form.addEventListener("submit", async e => {
    e.preventDefault()
    console.log('Form submitted')
    const data = new FormData(form)
    const confirmation = document.getElementById('confirmation')

    const newEntry = {
        name: data.get("name"),
        description: data.get("description"),
        ingredients: data.get("ingredients"),
        steps: data.get("steps"),
        notes: data.get("notes")
    }

    console.log(newEntry)

    try {
        const postRequest = await fetch("http://localhost:2025/api/recipes", {
            method: "POST",
            body: JSON.stringify(newEntry),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    } catch (error) {
        console.error(error.message)
    }

    confirmation.style.display = "block"
    
    form.reset()
})

close.addEventListener("click", e => {
    confirmation.style.display = "none"
})