import { orderPost } from "./transientState.js";

const handleOrderSubmission = (clickEvent) => {
   if (clickEvent.target.id === "purchase") {
       console.log("Button clicked!")
       orderPost();
   }
}


export const orderButton = () => {
   document.addEventListener("click", handleOrderSubmission)
   return `<button id='purchase'>Place Order</button>`
}
