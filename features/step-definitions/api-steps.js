const axios = require('axios').default;
const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;

When(/^Try to do my api test$/, async () => {
    axios.post('https://thinkmobiles.com/api/auth/sign-in/', {
        email: 'dantes.8ua8@gmail.com',
        password: 'lolyP0P11',
        rememberMe: false
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
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
