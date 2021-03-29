const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseSignUp;
 const email = 'archy787ua@gmail.com';
let id;


Then(/^I try to login on TM site with new password$/, async () => {
    let password='mustang';
    id = await apiHelper.login(email, password);
    console.log(`User ID: ${id}`);
});
Then(/^I try to login on TM site with old password$/, async () => {
    let password='lolyP0P11';
    id = await apiHelper.login(email, password);
    console.log(`User ID: ${id}`);
});

When(/^I send request to change my password to new$/, async () => {
    let password='lolyP0P11';
    let  setCookie= await apiHelper.loginToGetCookies(email, password);
    console.log(setCookie);

    let newPassword = 'mustang';
    let confirmPassword = 'mustang';
    let urlProfile = 'https://thinkmobiles.com/api/profile/user-auth/';

    let dataPass = {
        currentPassword:password,
        newPassword:newPassword,
        confirmPassword:confirmPassword
    }

    let headers = new Map();
        headers.set("Content-Type", "application/json");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("Cookie", `${setCookie}`);

    responseProfile = await apiHelper.sendRequest("POST", urlProfile, JSON.stringify(dataPass), headers);
        console.log(responseProfile.request.body);
        console.log(responseProfile.request.headers);
        console.log(responseProfile.body);
        console.log(`Profile statusCode: ${responseProfile.statusCode}`);
});

When(/^I send request to return my old password$/, async () => {
    let password = 'mustang';
    let  setCookie= await apiHelper.loginToGetCookies(email, password);
    console.log(setCookie)
    let newPassword = 'lolyP0P11';
    let confirmPassword = 'lolyP0P11';
    let urlProfile = 'https://thinkmobiles.com/api/profile/user-auth/';

    let dataPass = {
        currentPassword:password,
        newPassword:newPassword,
        confirmPassword:confirmPassword
    }

    let headers = new Map();
        headers.set("Content-Type", "application/json");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("Cookie",`${setCookie}`);



    responseProfile = await apiHelper.sendRequest("POST", urlProfile, JSON.stringify(dataPass), headers);
        console.log(responseProfile.request.body);
        console.log(responseProfile.request.headers);
        console.log(responseProfile.body);
        console.log(`Profile statusCode: ${responseProfile.statusCode}`);
});

