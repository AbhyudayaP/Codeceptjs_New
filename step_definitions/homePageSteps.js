const { I, mainPage,cartPage } = inject();

// Add in your custom step files

When('User on the main page', async() => {
    await mainPage.verifyMainPage();
});

Then('User clicks on add to cart button', async() => {
    await mainPage.clickOnAddtoCartButton();
});

Then('User clicks on cart icon', async()=> {
    await mainPage.clickOnCart();
});

Then('user verifies the item details', async()=> {
    await cartPage.VerifytheProduct();
});


