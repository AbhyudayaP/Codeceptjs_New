const { I } = inject();

  module.exports= {
    //insert your locators
    // this.button = '#button'
  
    pageTitle: "//div[@class='login_logo']",
    login : "//input[@id='user-name']",
    password: "//input[@id='password']",
    LoginBtn:"//input[@id='login-button']",
  
  // insert your methods here
   async verifyHomePage(){
    //let ActualTitle = await I.grabTextFrom(this.pageTitle);
    //let ExpectedTitle = "Swag Labs";
    //I.seeTextEquals(ActualTitle,ExpectedTitle);  
    I.seeTitleEquals("Swag Labs");

   },
 
   async enterUsernameAndPassword(){
    
    await I.fillField(this.login,"standard_user");
    await I.fillField(this.password,"secret_sauce");
   
  
},
 async clickOnLoginButton(){
  await I.click(this.LoginBtn);
 }
  }
