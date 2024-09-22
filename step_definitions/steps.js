const { I, loginPage } = inject();

// Add in your custom step files

Given('I am on the HomePage', async() => {
  // TODO: replace with your own step
  I.amOnPage('/');
  await loginPage.verifyHomePage();

});

Then('The user enters name and password',async()=> {
  await loginPage.enterUsernameAndPassword()
});

Then('User clicks on Login button',async()=>{
  await loginPage.clickOnLoginButton();
});
