const { I } = inject();

  module.exports= {
    inventoryItemName : "//div[@class='inventory_item_name']",
    price: "//div[@class='inventory_item_price']",
    quantity: "//div[@class='cart_quantity']",

    async VerifytheProduct(){
        await I.seeTextEquals("Sauce Labs Backpack", this.inventoryItemName);
        await I.seeTextEquals("1",this.quantity);
        await I.see("29.99",this.price);
    }



  }