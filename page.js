//const { $ } = require("webdriverio/build/commands/browser");
//const { setValue } = require("webdriverio/build/commands/element");

module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: 'div*=Phone number',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkCardButton: 'button=Link',
    closePaymentMethodModalButton: '.payment-picker .close-button',
    supportiveButton: 'div=Supportive',
    messageDriverButton: '#comment',
    orderReqs: 'div=Order requirements',
    iceCreamCounter: 'div=+',
    iceCreamContainer: 'div=Ice cream',
    iceCreamCount: '.counter-value',
    waitForTheDriverButton: '.smart-button-main',
    blanketSwitchResult: '.switch-input',
    reqsButton: '.reqs',
    blanketButton: 'div=Blanket and Handkerchiefs',
    //Added blanketCheckbox element 
    blanketCheckbox: '//div[contains(text(),"Blanket and handkerchiefs")]/following-sibling::div',

    // Modals
    phoneNumberModal: '.modal',

    // Misc
    cardSignatureStrip: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',

    // Functions
    fillAddresses: async function (from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },

        fillPhoneNumber: async function (phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },

        submitPhoneNumber: async function (phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        // add check that we have only one response
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
        
        addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        // Click add card
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        // Inputting card number
        const cardNumber = await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber,setValue(1234567812345678);

        // Inputting card code
        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(23);

        // Click signature strip
        const cardSignatureStrip = await $(this.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();

        // Click link button
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        // Close payment method modal
        const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton);
        await closePaymentMethodModalButton.waitForDisplayed();
        await closePaymentMethodModalButton.click();

},
     
        orderBlanketAndHandkerchiefs: async function() {
        const orderReqs = await $(this.reqsButton);
        await orderReqs.waitForDisplayed();
        await orderReqs.scrollIntoView();
        await orderReqs.click();
        const blanketSwitch = await $(this.blanketCheckbox);
        await blanketSwitch.waitForDisplayed();
        await blanketSwitch.click();
   },

        writeMessageToDriver: async function(message) {
        const messageDriverButton = await $(this.messageDriverButton);
        await messageDriverButton.waitForDisplayed();
        await messageDriverButton.scrollIntoView();
        await messageDriverButton.setValue(message);

        return messageDriverButton; 
},

        waitForTheDriver: async function() {
        const waitForTheDriverButton = await $(this.waitForTheDriverButton);
        await waitForTheDriverButton.click();
},

        orderIceCream: async function() {
        const iceCreamCounter = await $(this.iceCreamContainer).parentElement().$(this.iceCreamCounter);
        await iceCreamCounter.scrollIntoView();
        await iceCreamCounter.click();
        await iceCreamCounter.click();
        const iceCreamNumber = await $(this.iceCreamContainer).parentElement().$(this.iceCreamCount);
        return iceCreamNumber.getText(); 
    
 },
};