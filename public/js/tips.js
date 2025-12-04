async function getTips() {
    try {
        const res = await fetch("http://localhost:2025/api/tips")
        const parsedData = await res.json()
        console.log(parsedData)
        return parsedData.data
    } catch (error) {
        console.error(error.message)
    }
}

getTips()
