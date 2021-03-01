const axios = require('axios').default;
const { Given, When, Then } = require('@cucumber/cucumber');

When(/^Try to do my api test$/,async() => {
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