const axios = require('axios').default;
const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;
let id;
let post;
let qwetySId;
//let newTitle = makeTitle();
//let body = makeBody();
const title = 'newTitle';
const content = 'newContent';
const date = new Date().getTime();
const email = 'test' + date + '@gmail.com';
const password = '123456';
const firstName = 'testFirstName';
const lastName = 'testLastName';
const urlCheck = 'https://thinkmobiles.com/api/auth/sign-up-check/';
const urlSignUp = 'https://thinkmobiles.com/api/auth/sign-up/';
const urlConfirm = 'https://thinkmobiles.com/api/testing/user/confirm-email/';
const urlSignIn = 'https://thinkmobiles.com/api/auth/sign-in/';
const urlPost = 'https://thinkmobiles.com/api/post/draft/';
const dataCheck = {email: email};
const dataSignUp = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
}
let dataSignIn = {
    email: email,
    password: password,
    rememberMe: false
}
// function makeTitle()  {
//     let title = "";
//     let possible = "abcdefghijklmnopq1234597689248654892";

//     for (let i = 0; i < 40; i++)
//     title += possible.charAt(Math.random()*possible.length);
//     return title
//     };
//     console.log('TITLE ' + makeTitle());
let dataPost = {
    title: title,
    body: content
}

let headers = new Map();
headers.set("Content-Type", "application/json");
headers.set("User-Agent", "Thinkmobiles-qa");
headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

When('The Registration on TM site', async () => {

    responseCheck = await apiHelper.sendRequest("POST", urlCheck, JSON.stringify(dataCheck), headers);
    responseCheck = responseCheck.body;

    if (responseCheck === "OK") {
        responseSignUp = await apiHelper.sendRequest("POST", urlCheck, JSON.stringify(dataCheck), headers);
        responseSignUp = await apiHelper.sendRequest("POST", urlSignUp, JSON.stringify(dataSignUp), headers);
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
When('The Confirm an email', async () => {

    response = await apiHelper.sendRequest("POST", urlConfirm, JSON.stringify(data), headers);
    console.log(response.request.body);
    console.log(response.headers);
    console.log(response.body);
    console.log(`Confirm statusCode: ${response.statusCode}`);
    console.log(response.responseText);
});

When('The Login on TM site', async () => {

    response = await thisModule.sendRequest("POST", urlSignIn, JSON.stringify(dataSignIn), headers);
    id = await apiHelper.login(email, password);
    //console.log(response.request.body);
    //console.log(response.headers);
    console.log(response.body);
    qwetySId = (response.rawHeaders[13]).split(";")[0];
    console.log(`Login statusCode: ${response.statusCode}`);
    console.log(response.responseText);
});


When('The Write a post', async () => {
    response = await thisModule.sendFormData(urlPost, dataPost, qwetySId);
    console.log("*********************************************");
    console.log('post response: ', response.statusCode);
    console.log('TITLE ' + title);
    console.log('BODY ' + content);
    console.log('BODY'+ response.body)
   
});
When('Delete a post', async () => {

}
)

Then('The Delete a user by id', async () => {

    let urlDelete = 'https://thinkmobiles.com/api/testing/user/'+id+'/';
    response = await thisModule.sendRequest("DELETE", urlDelete,'', headers);
    console.log(`User ID: ${id}`);
    console.log(`Delete statusCode: ${response.statusCode}`);
    console.log(response.body);
    console.log(urlDelete)
});