const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', async () => {
    /*it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })*/

    it ('should complete full process of ordering a taxi', async () => {
        // Call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');


        // Selecting supportive class
        const supportiveButton = await $(page.supportiveButton); 
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click(); 
  
        // Inputting phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

        // Add a payment card
        await page.addPaymentMethodCard();
     
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting(); 
       
        // Writing a message for the driver
        const messageDriverButton = await page.writeMessageToDriver('hi driver');
        await expect(messageDriverButton).toHaveValue('hi driver'); 

        // Ordering a blanket and handkerchiefs 
        const orderReqs = await page.orderBlanketAndHandkerchiefs();


        // Ordering 2 Ice Creams
        const iceCreamNumber = await page.orderIceCream(2);
        await expect(iceCreamNumber).toBe('2');

        // Waiting for the driver
        await page.waitForTheDriver();
        await expect($('.order-body')).toBeExisting(); 
    
    
    })

})

