const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;
let id;

let date = new Date().getTime();
let email = 'test' + date + '@gmail.com';
let password = '123456';
let firstName = 'testFirstName';
let lastName = 'testLastName';
let urlCheck = 'https://thinkmobiles.com/api/auth/sign-up-check/';
let urlSignUp = 'https://thinkmobiles.com/api/auth/sign-up/';
let urlConfirm = 'https://thinkmobiles.com/api/testing/user/confirm-email/';
let urlSignIn = 'https://thinkmobiles.com/api/auth/sign-in/';
let dataCheck = {email: email};
let dataSignUp = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
};
let dataSignIn = {
    email: email,
    password: password,
    rememberMe: false
};
let headers = new Map();
headers.set("Content-Type", "application/json");
headers.set("User-Agent", "Thinkmobiles-qa");
headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");
When(/^Try to registrate on TM site$/, async () => {

let userEmail



When(/^Try to login on TM site$/, async () => {

    let email = userEmail;
    let password='fgth456';
    id = await apiHelper.login(email, password);
    console.log(`User ID: ${id}`);
});



When(/^Try to registrate on TM site$/, async () => {
    let date = new Date().getTime();
    let email = 'test' + date + '@gmail.com';
    userEmail = email
    let password = 'fgth456';
    let firstName = 'testFirstName';
    let lastName = 'testLastName';
    let urlCheck = 'https://thinkmobiles.com/api/auth/sign-up-check/';
    let urlSignUp = 'https://thinkmobiles.com/api/auth/sign-up/';
    let dataCheck = {email: email};
    let dataSignUp = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    let headers = new Map();
    headers.set("Content-Type", "application/json");
    headers.set("User-Agent", "Thinkmobiles-qa");
    headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");


    responseCheck = await apiHelper.sendRequest("POST", urlCheck, JSON.stringify(dataCheck), headers);
    responseCheck = responseCheck.body;


    if (responseCheck === "OK") {
        responseSignUp = await apiHelper.sendRequest("POST", urlCheck, JSON.stringify(dataCheck), headers);
        responseSignUp = await apiHelper.sendRequest("POST", urlSignUp, JSON.stringify(dataSignUp), headers);



    if (responseCheck === "OK") {
        responseSignUp = await apiHelper.sendRequest("POST", urlSignUp, JSON.stringify(dataSignUp), headers);
             console.log(responseSignUp.request.body);
             console.log(responseSignUp.request.headers);
             console.log(responseSignUp.body);
             console.log(`SignUp statusCode: ${responseSignUp.statusCode}`);


    }
    console.log(responseSignUp.request.body);
    console.log(responseSignUp.headers);
    console.log(responseSignUp.body);
    console.log(`Registration statusCode: ${responseSignUp.statusCode}`);
    console.log(responseSignUp.responseText);
});

let data = {
    "email": email
};
When(/^Try to confirm an email$/, async () => {

    response = await apiHelper.sendRequest("POST", urlConfirm, JSON.stringify(data), headers);
    console.log(response.request.body);
    console.log(response.headers);
    console.log(response.body);
    console.log(`Confirm statusCode: ${response.statusCode}`);
    console.log(response.responseText);
});

When(/^Try to login on TM site$/, async () => {

    response = await thisModule.sendRequest("POST", urlSignIn, JSON.stringify(dataSignIn), headers);
    id = await apiHelper.login(email, password);
    console.log(response.request.body);
    console.log(response.headers);
    console.log(response.body);
    console.log(`Login statusCode: ${response.statusCode}`);
    console.log(response.responseText);
});

When(/^Try to delete a user by id$/, async () => {

    let urlDelete = 'https://thinkmobiles.com/api/testing/user/'+id+'/';
    response = await thisModule.sendRequest("DELETE", urlDelete,'', headers);
    console.log(`User ID: ${id}`);
    console.log(`Delete statusCode: ${response.statusCode}`);
    console.log(response.body);
    console.log(urlDelete)
});



Then(/^Confirm user on TM site$/, async () => {

  const data = {
        email: userEmail
        };

  const url = 'https://thinkmobiles.com/api/testing/user/confirm-email'
  let headers = new Map();
  headers.set("Content-Type", "application/json");
  headers.set("User-Agent", "Thinkmobiles-qa");
  headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

  let response = await thisModule.sendRequest("POST", url,JSON.stringify(data) , headers);

  console.log(`Confirm statusCode: ${response.statusCode}`);
  console.log(`Message: ${response.body}`);
});



Then(/^Delete user from TM site$/, async () => {

        const url = 'https://thinkmobiles.com/api/testing/user/'+ id +'/'

        let headers = new Map();
        headers.set("Content-Type", "application/json");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

        let response = await thisModule.sendRequest("DELETE", url,'', headers);
        console.log(`Delete statusCode: ${response.statusCode}`);
        console.log(`Message: ${response.body}`);
});
