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

        await browser.pause(2000);

        // Adding a payment method
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click(); 

        await browser.pause(2000);
        // Adding a card
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click(); 

        await browser.pause(2000);
        // Inputting card number
        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);
        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(23); 

        await browser.pause(2000);

        // Click signature strip
        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click(); 
 
        // Click link button
        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click(); 

        await browser.pause(2000);

        // Close payment method modal
        const closePaymentMethodModalButton = await $(page.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click(); 

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting(); 

        await browser.pause(2000);
       
        // Writing a message for the driver
        const messageDriverButton = await page.writeMessageToDriver('hi driver');
        await expect(messageDriverButton).toHaveValue('hi driver'); 

        // Ordering a blanket and handkerchiefs 
        const orderReqs = await page.orderBlanketAndHandkerchiefs();
        // await expect(orderReqs).toBeSelected();


        await browser.pause(2000);

        // Ordering 2 Ice Creams
        const iceCreamNumber = await page.orderIceCream();
        await expect(iceCreamNumber).toBe('2');

        // Waiting for the driver
        await page.waitForTheDriver();
        await expect($('.order-body')).toBeExisting(); 
    
        await browser.pause(5000);
    })

})
