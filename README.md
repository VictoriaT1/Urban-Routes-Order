Project 8

To set up the environment before creating the test is as follows: After linking Practicum account with GitHub, a repository will be created automatically. The repository name will be hm08-qa-us.

The next step is to create a directory to store the project. 
Next you will change the directory into the new projects folder and clone the repo using git clone git@github.com:username/hm08_qa_us.git. After cloning the repo, run npm install from the console into project folder. Then, in config.js replace the URL with the unique link generated for launching the server for Urban Routes.

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
