![image](https://github.com/user-attachments/assets/ecf7108c-43e3-4555-8979-52d191c49132)
Project 8

In this project, I developed JavaScript code using Visual Studio Code and utilized WebdriverIO for test automation to evaluate the ordering process of ordering a taxi on the Urban Routes web application. I employed the 'describe' and 'it' methods to structure the tests, incorporating JavaScript commands such as const, await, and expect. CSS and XPath locators were used to identify web elements for the tests. The test scenarios included setting the address, selecting the support plan, entering the phone number, adding a credit card, writing a message for the driver, ordering a blanket and handkerchiefs, ordering two ice creams, and waiting for the car search modal to appear. Comments were added to separate each test, and each test can be individually commented out to run separately if needed.

Pre Conditions

1. Copy Urban Routes URL to the wdio.conf.js file in the hm08-qa-us folder
2. Run "npm install" in your console in the hm08-qa-us folder
3. Ensure WebdriverIO is installed

To run tests
Run "npm run wdio" in the console

In this project a test and steps are written to check the functionality of the Urban Routes App.
All tests are written in the createAnOrder.e2e.js file located in the test/specs folder. The automated
test covers the full process of ordering a taxi including
1. Setting the address
2. Selecting the supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message to the driver
6. Ordering a blanket and handkerchiefs
7. Ordering 2 Ice creams
8. Waiting for the driver

The test runs in the chrome browser and passes successfully. The purpose of this project is to
write code in javascript to automate the steps to order a taxi.

To push changes: git add . git commit git push
