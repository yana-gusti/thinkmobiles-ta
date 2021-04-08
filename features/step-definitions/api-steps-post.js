const { Given, When, Then } = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-write-helper');
const { expect } = require('chai');

const userPost ={
    title: 'Step',
    content: 'Steps to update',
    loginCookie: null
};

const date = new Date().getTime();

const testUser = {
    id: null,
    email: 'test' + date + '@gmail.com',
    password: '123456', 
    firstName: 'Poni', // 'testFirstName',
    lastName: 'Rama', // 'testLastName'
    loginCookie: null
}

const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Thinkmobiles-qa',
    'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8'
};

Given('Register on TM site', async () => {
    const response = await apiHelper.register(testUser.email, testUser.password, testUser.firstName, testUser.lastName);
    expect(response.statusCode).to.equal(201);
    console.log(response.statusCode);
    const body = JSON.parse(response.body);
    console.log('Body: ',body);
    expect(body.payload).to.equal('An email with an activation link has been sent to your inbox.');
});

When('Confirm an email', async () => {
    const response = await apiHelper.confirmEmail(testUser.email);

    // TODO: Check response
    expect(response.statusCode).to.equal(200);
});

When('Login on TM site', async () => {
    const response = await apiHelper.login(testUser.email, testUser.password);
    expect(response.statusCode).to.equal(200);
    const loggedInUser = JSON.parse(response.body).user;
    expect(loggedInUser.email).to.equal(testUser.email);
    expect(loggedInUser.firstName).to.equal(testUser.firstName);
    expect(loggedInUser.lastName).to.equal(testUser.lastName);
    console.log(response.body);
    testUser.loginCookie = response.headers['set-cookie'][0].split(";")[0];
    testUser.id = loggedInUser.id;
});


When('Write a post', async () => {
    const response = await apiHelper.postDraft(userPost.title, userPost.content, './testData/testImage.jpg', testUser.loginCookie);
    expect(response.statusCode).to.equal(201);
    const body = JSON.parse(response.body);
    console.log('statusCode: ',response.statusCode);
    expect(body.url).to.equal('/profile/?view=post&type=draft');
});

When('Delete a post', async () => {
    const userPost = await apiHelper.getLastUserPost(testUser.id, testUser.loginCookie);
    console.log(userPost);
    const responseDelete = await apiHelper.deletePost(userPost.id);
    console.log(responseDelete.body);
    console.log(responseDelete.statusCode);
    expect(responseDelete.statusCode).to.equal(200);
});

Then('Delete a user by id', async () => {
    const response = await apiHelper.deleteUser(testUser.id);
    expect(response.statusCode).to.equal(200);
});
