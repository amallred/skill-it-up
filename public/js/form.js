const form = document.querySelector("form")

form.addEventListener("submit", async e => {
    e.preventDefault()
    console.log('Form submitted')
    const data = new FormData(form)

    const newEntry = {
        name: data.get("name"),
        description: data.get("description"),
        ingredients: data.get("ingredients"),
        steps: data.get("steps"),
        notes: data.get("notes")
    }

    console.log(newEntry)

    try {
        const postRequest = await fetch("http://localhost:5000/api/recipes", {
            method: "POST",
            body: JSON.stringify(newEntry),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    } catch (error) {
        console.error(error.message)
    }

    form.reset()
})