const { I } = inject();

  module.exports= {
    logo: "//div[@class='header_label']/div[@class='app_logo']",
    addToCartButton: "//button[@id='add-to-cart-sauce-labs-backpack']",

    async verifyMainPage(){
        await I.seeElementInDOM(this.logo);
        let HomePageTitle = I.grabTextFrom(this.logo);
        console.log(HomePageTitle);
        I.seeTextEquals('Swag Labs',this.logo);


    }




  }