const { I } = inject();

  module.exports= {
    logo: "//div[@class='header_label']/div[@class='app_logo']",
    addToCartButton: "//button[@id='add-to-cart-sauce-labs-backpack']",
    cartButton: "//a[@class='shopping_cart_link']",

    async verifyMainPage(){
        await I.seeElementInDOM(this.logo);
        let HomePageTitle = I.grabTextFrom(this.logo);
        console.log(HomePageTitle);
        I.seeTextEquals('Swag Labs',this.logo);


    },

    async clickOnAddtoCartButton(){
      await I.click(this.addToCartButton);
    },

    async clickOnCart(){
      await I.click(this.cartButton);
    }




  }