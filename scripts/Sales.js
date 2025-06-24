export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable").then(res => res.json())

    let saleHTML = "<section>"

   saleHTML += `${sales.map((sale) => {
    const totalPrice = sale.entree.price + sale.side.price + sale.vegetable.price
    return `<div>Your order of ${sale.entree.name}, ${sale.side.title}, and ${sale.vegetable.type} costs $${totalPrice.toFixed(2)}</div>`
   }
)
}`

   return saleHTML
}

