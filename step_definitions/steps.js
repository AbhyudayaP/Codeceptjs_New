const { I, loginPage } = inject();

// Add in your custom step files

Given('I am on the HomePage', async() => {
  // TODO: replace with your own step
  I.amOnPage('/');
  await loginPage.verifyHomePage();

});

Then('User enters name and password',async()=> {
  await loginPage.enterUsernameAndPassword()
})

