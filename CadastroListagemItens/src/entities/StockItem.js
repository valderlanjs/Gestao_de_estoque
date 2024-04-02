export const SALES = [
    "Sim",
    "Não"

  ]
  
  export default class StockItem {
    constructor({ name, description, quantity, price, sale }) {
      this.id = Math.floor(Math.random() * 10000000)
      this.name = name
      this.description = description
      this.quantity = +quantity
      this.price = +price
      this.sale = sale
      this.createdAt = new Date()
      this.updatedAt = new Date()
      this.#validate()
    }
  
    #validate() {
      const validName = typeof this.name === "string"
      const validDescription = typeof this.description === "string"
      const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
      const validPrice = typeof this.price === "number"
      const validSale = SALES.includes(this.sale)
      if (!(
        validName &&
        validDescription &&
        validQuantity &&
        validPrice &&
        validSale
      )) {
        throw new Error("Invalid item!")
      }
    }
  }