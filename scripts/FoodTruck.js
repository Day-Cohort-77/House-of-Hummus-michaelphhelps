import { Sales } from "./Sales.js"
import { entreeRadioOptions } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { orderButton } from "./orderButton.js"
export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await entreeRadioOptions()
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()
    const orderHTML = orderButton()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section>
        ${entreeHTML}
        ${sidesHTML}
        ${veggiesHTML}
        </section>
        <article>
            ${orderHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
