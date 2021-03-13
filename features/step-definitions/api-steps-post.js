const { Given, When, Then } = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
const { expect } = require('chai');

const userPost ={
    postId: null,
    title: 'newTitle',
    content: 'newContent',
    loginCookie: null
};

const date = new Date().getTime();

const testUser = {
    id: null,
    email: 'panoramamiruz@gmail.com', // 'test' + date + '@gmail.com',
    password: 'PanoramaMir007', // '123456',
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

    const body = JSON.parse(response.body);
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

    testUser.loginCookie = response.headers['set-cookie'][0].split(";")[0];
    testUser.id = loggedInUser.id;
    console.log('ID: ',testUser.id);
});


When('Write a post', async () => {
    const response = await apiHelper.postDraft(userPost.title, userPost.content, null, testUser.loginCookie);
    expect(response.statusCode).to.equal(201);
    console.log('TITLE: ',userPost.title);
    console.log('CONTENT: ',userPost.content);
    console.log('ID: ', postId);
    const body = JSON.parse(response.body);
    expect(body.url).to.equal('/profile/?view=post&type=draft');
});

When('Delete a post', async () => {
    const response = await apiHelper.deletePost()
});

Then('Delete a user by id', async () => {
    const response = await apiHelper.deleteUser(testUser.id);
    expect(response.statusCode).to.equal(200);
});