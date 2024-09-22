const { I } = inject();

  module.exports= {
    //insert your locators
    // this.button = '#button'
  
    pageTitle: "//img[@class='fb_logo _8ilh img']",
    login : "//input[@id='user-name']",
    
  
  // insert your methods here
 
   async enterUsernameAndPassword(){
    
    await I.fillField(this.login,"abhyudaya695@gmail.com");
   
  
}
  }
