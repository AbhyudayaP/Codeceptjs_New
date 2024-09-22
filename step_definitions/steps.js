const { I, loginPage } = inject();

// Add in your custom step files

Given('I am on the HomePage', async() => {
  // TODO: replace with your own step
  I.amOnPage('/');
  await loginPage.verifyHomePage();

});

Then(/^The user enters (.*) and password$/,async(username)=> {
  await loginPage.enterUsernameAndPassword(username);
});

Then('The user clicks on Login button',async()=>{
  await loginPage.clickOnLoginButton();
});
