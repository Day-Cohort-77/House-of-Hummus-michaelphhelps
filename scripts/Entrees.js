import { setEntree } from "./transientState.js"

const entreeChoice = (event) =>{
    if(event.target.name === "entrees"){
        const chosenEntree = parseInt(event.target.value)
        setEntree(chosenEntree)
    }
}



export const entreeRadioOptions = async() =>{
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", entreeChoice)

    const entreeHTML = `<section><h1>Entree Selections</h1>
    ${entrees.map((entree) =>{
        return `<input type="radio" name="entrees" value="${entree.id}" /> ${entree.name}`
    }
)
}
    </section>
    `
    return entreeHTML
}