import { setVeggies } from "./transientState.js"

const veggieOptions = (event) => {
    if(event.target.name === "veggies"){
        const chosenVeggie = parseInt(event.target.value)
        setVeggies(chosenVeggie)
    }
}


export const Veggies = async() => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()

    document.addEventListener("change", veggieOptions)

    const veggieHTML = `<section><h1>Vegetable Selections</h1>
    ${veggies.map((veggie) =>{
        return `<input type="radio" name="veggies" value="${veggie.id}" /> ${veggie.type}`
    }
)
}
    </section>
    `
    return veggieHTML
}