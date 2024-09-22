const { I, mainPage } = inject();

// Add in your custom step files

When('User on the main page', async() => {
    await mainPage.verifyMainPage();
})
