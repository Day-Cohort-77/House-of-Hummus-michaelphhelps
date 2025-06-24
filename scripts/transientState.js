const state = {
    entreeId: 0,
    sideId: 0,
    vegetableId: 0
}

export const setEntree = (entree) =>{
    state.entreeId = entree
}

export const setSide = (side) =>{
    state.sideId = side
}

export const setVeggies = (veggie) =>{
    state.vegetableId = veggie
}

export const orderPost = async () =>{

    const orderStatus = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
    }

    const response = await fetch("http://localhost:8088/purchases", orderStatus)

    const newOrderEvent = new CustomEvent("orderPlaced")
    document.dispatchEvent(newOrderEvent)
}
