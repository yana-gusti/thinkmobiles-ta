const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;
let id;

When(/^Try to login on TM site$/, async () => {

    let email ='dantes.8ua8@gmail.com';
    let password='lolyP0P11';
    id = await apiHelper.login(email, password);
    console.log(id);

});

When(/^Try to registrate on TM site$/, async () => {
    let date = new Date().getTime();
    let email = 'test' + date + '@gmail.com';
    let password = '123456';
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
    // console.log(response.request.body);
    // console.log(response.request.headers);
    // console.log(response.body);
    // console.log(response.statusCode);
    // console.log(response.responseText);
    responseCheck = responseCheck.body;


    if (responseCheck === "OK") {
        responseSignUp = await apiHelper.sendRequest("POST", urlCheck, JSON.stringify(dataCheck), headers);
    }
});
