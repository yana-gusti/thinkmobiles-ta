const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;
let id;
let userEmail

When(/^Try to login on TM site$/, async () => {
//{"email":"test1614761464366@gmail.com","password":"wasttf5f6","firstName":"Duc5f5","lastName":"Ternator55f5"}

    let email ='test1614761464366@gmail.com';
    let password='wasttf5f6';
    id = await apiHelper.login(email, password);
    console.log(id);

//    let email ='dantes.8ua8@gmail.com';
//    let password='lolyP0P11';
//    id = await apiHelper.login(email, password);
//    console.log(id);

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
        responseSignUp = await apiHelper.sendRequest("POST", urlSignUp, JSON.stringify(dataSignUp), headers);
             console.log(responseSignUp.request.body);
             console.log(responseSignUp.request.headers);
             console.log(responseSignUp.body);
             console.log(responseSignUp.statusCode);
             console.log(responseSignUp.responseText);
    }
});

///////////////////////###########################################////////////////////////////////////////////////

When(/^Try to add user to TM site$/, async () => {
    let date = new Date().getTime();
    let email = 'test1614761464366@gmail.com';
    userEmail=email

    let password = 'wasttf5f6';
    let firstName = 'Duc5f5';
    let lastName = 'Ternator55f5';
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
//     console.log(responseCheck.request.body);
//     console.log(responseCheck.request.headers);
//     console.log(responseCheck.body);
//     console.log(responseCheck.statusCode);
//     console.log(responseCheck.responseText);
    responseCheck = responseCheck.body;

    if (responseCheck === "OK") {
        responseSignUp = await apiHelper.sendRequest("POST", urlSignUp, JSON.stringify(dataSignUp), headers);
                     console.log(responseSignUp);
             console.log(responseSignUp.request.body);
             console.log(responseSignUp.request.headers);
             console.log(responseSignUp.body);
             console.log(responseSignUp.statusCode);
    }
});

Then(/^Confirm user on TM site$/, async () => {
//{"email":"test1614761464366@gmail.com","password":"wasttf5f6","firstName":"Duc5f5","lastName":"Ternator55f5"}

  const data = {
        email:'test1614761464366@gmail.com'
        };
        const url = 'https://thinkmobiles.com/api/testing/user/confirm-email'

        let headers = new Map();
        headers.set("Content-Type", "application/json");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

        let response = await thisModule.sendRequest("POST", url,JSON.stringify(data) , headers);
//        let body = JSON.parse(response.body);
         console.log(response.request.body);
         console.log(response.request.headers);
         console.log(response.body);
         console.log(response.statusCode);
         console.log(response.body);
//        let user = body['user'];


});

Then(/^Delete user from TM site$/, async () => {
//{"email":"test1614761464366@gmail.com","password":"wasttf5f6","firstName":"Duc5f5","lastName":"Ternator55f5"}

//{"user":{"id":82623,"email":"test1614761464366@gmail.com","avatar":null,"roleId":2,"lastName":"Ternator55f5","secured":true,"companyId":null,"firstName":"Duc5f5"},"s
//Id":"XgoOVrREhfI7E9Frw_PiBeCboxVIb7Up"}

//  const data = {
//        email:'test1614761464366@gmail.com'
//        };
        const url = 'https://thinkmobiles.com/api/testing/user/82623/'

        let headers = new Map();
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

//        let response = await thisModule.sendRequest("DELETE", url,JSON.stringify(data) , headers);
        let response = await thisModule.sendRequest("DELETE", url, headers);

//        let body = JSON.parse(response.body);
         console.log(response.request.body);
         console.log(response.request.headers);
         console.log(response.body);
         console.log(response.statusCode);
         console.log(response.body);
//        let user = body['user'];


});