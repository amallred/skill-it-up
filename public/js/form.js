const form = document.querySelector("form")

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

    // confirm("Thank you for sharing a recipe! Visit the <a href="recipes.html">recipes page</a> to see your entry!")

    confirmation.style.display = "block"
    
    form.reset()
})

// I would like to have the confirmation message disappear when the user clicks out of the box and/or provide an x button to close it