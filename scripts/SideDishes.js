import { setSide } from "./transientState.js"

const sidesChoice = (event) =>{
    if(event.target.name === "sides"){
        const chosenSide = parseInt(event.target.value)
        setSide(chosenSide)
    }
}



export const Sides = async () => {
 const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", sidesChoice)

    const sidesHTML = `<section><h1>Side Selections</h1>
    ${sides.map((side) =>{
        return `<input type="radio" name="sides" value="${side.id}" /> ${side.title}`
    }
)
}
    </section>
    `
    return sidesHTML
}

