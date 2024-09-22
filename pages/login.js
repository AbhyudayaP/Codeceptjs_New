const { I } = inject();

  module.exports= {
    //insert your locators
    // this.button = '#button'
  
    pageTitle: "//div[@class='login_logo']",
    login : "//input[@id='user-name']",
    password: "//input[@id='password']",
    LoginButton:"//input[@id='login-button']",
  
  // insert your methods here
   async verifyHomePage(){
    //let ActualTitle = await I.grabTextFrom(this.pageTitle);
    //let ExpectedTitle = "Swag Labs";
    //I.seeTextEquals(ActualTitle,ExpectedTitle);  
    I.seeTitleEquals("Swag Labs");

   },
 
   async enterUsernameAndPassword(username){
    
    await I.fillField(this.login, username);
    await I.fillField(this.password,"secret_sauce");
   
  
},
 async clickOnLoginButton(){
  await I.click(this.LoginButton);
 }
  }
