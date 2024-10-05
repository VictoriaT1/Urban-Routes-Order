<b><h2>Project Description - E2E Testing on Urban Routes Web App</h2></b>

![image](https://github.com/user-attachments/assets/ecf7108c-43e3-4555-8979-52d191c49132)


<h2>Project Overview</h2>
In this project, I developed JavaScript code using Visual Studio Code and utilized WebdriverIO for test automation to evaluate the ordering process of ordering a taxi on the Urban Routes web application. I employed the 'describe' and 'it' methods to structure the tests, incorporating JavaScript commands such as const, await, and expect. CSS and XPath locators were used to identify web elements for the tests. The test scenarios included setting the address, selecting the supportive plan, entering the phone number, adding a credit card, writing a message for the driver, ordering a blanket and handkerchiefs, ordering two ice creams, and waiting for the car search modal to appear. Comments were added to separate each test, and each test can be individually commented out to run separately if needed.

All tests are written in the createAnOrder.e2e.js file located in the test/specs folder. The automated
test covers the full process of ordering a taxi including:
1. Setting the address
2. Selecting the supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message to the driver
6. Ordering a blanket and handkerchiefs
7. Ordering 2 Ice creams
8. Waiting for the driver

<b><h2>Technologies Used</h2></b>
Javascript<br>
Node.js</br>
WebDriverIO<br>
Mocha

<b><h2>Techniques Used</h2></b>
<b>Page Object Model (POM)</b>
In the page.js file, elements such as fromField, toField, and phoneNumberField are organized within a class structure. This approach enhances the efficiency of utilizing these elements across various test cases.

<b>Network Request Interceptor</b>
The line await browser.setupInterceptor(); initiates the process of intercepting network requests, while const requests = await browser.getRequests(); retrieves and examines them. This technique is useful and allows the system to obtain the verification code sent for phone number validation.

<b>Element Visibility Checks</b>
The statement await $(this.callATaxiButton).waitForDisplayed(); confirms that the button is visible before any interaction is attempted.

<b>Randomized Data Generation</b>
The function responsible for generating randomized data can be located in the helper.js file of the project. Specifically, the getPhoneNumber function within this file generates unique phone numbers for each test run.

<b>Element Interaction</b>
For instance, await $(this.nextButton).click(); simulates a user action by clicking the "Next" button.

<b><h2>Running Tests</h2></b>
Ensure that Node.js is installed on your machine.
Install the necessary dependencies using Node.js (WebDriverIO, Mocha)<br>
![Screenshot 2024-10-05 at 1 07 06 PM](https://github.com/user-attachments/assets/ca5a28f7-8e2a-429c-995c-1f5adfa0db4b)<br>
Obtain a valid, up-to-date server URL from TripleTen -- update the baseURL in the wdio.config.js file with this URL.<br>
Finally, execute the following command in your project’s terminal to run the tests:
![Screenshot 2024-10-05 at 12 57 20 PM](https://github.com/user-attachments/assets/d4f7c6b5-871f-4151-bfe3-aa7763c589f8)


