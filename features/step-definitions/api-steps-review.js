const { Given, When, Then } = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-write-helper');
const { expect } = require('chai');

const date = new Date().getTime();

const reviewData = {
    id: 0,
    userId: null,
    mode: 'draft',
    type: 'video',
    target: {
        type: 'software',
        id: 37186
    },
    overall: {
        using: 'Free trial',
        rating: {
            estimates: {
                quality: 4,
                functionality: 4,
                usability: 3,
                ability: 3,
                schedule: null,
                cost: null,
                communication: null
            },
            avg: 3.5
        }
    },
    description: {
        short: 'Lorem ispum dolor sit amet, consectetur adipiscing elit...',
        pros: [],
        cons: []
    },
    video: {
        text: 'Lorem ispum dolor...',
        src: 'https://www.youtube.com/embed/Qig1tF5iNzI',
        image: 'https://img.youtube.com/vi/Qig1tF5iNzI/mqdefault.jpg'
    },
}
const testUser = {
    id: null,
    email:'test' + date + '@gmail.com', 
    password: '123456',
    firstName: 'testFirstName',
    lastName: 'testLastName',
    loginCookie: null
}

const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Thinkmobiles-qa',
    'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8'
};

Given('Register on a site', async () => {
    const response = await apiHelper.register(testUser.email, testUser.password, testUser.firstName, testUser.lastName);
    expect(response.statusCode).to.equal(201);
    const body = JSON.parse(response.body);
    expect(body.payload).to.equal('An email with an activation link has been sent to your inbox.');
});

When('Confirm email', async () => {
    const response = await apiHelper.confirmEmail(testUser.email);

    // TODO: Check response
    expect(response.statusCode).to.equal(200);
});

When('Login on a site', async () => {
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


When('Write a review', async () => {
    reviewData.userId=testUser.id;
    const response = await apiHelper.reviewDraft(reviewData, testUser.loginCookie);
    const body = JSON.parse(response.body);
    expect(body.payload).to.equal('Review successfully saved to drafts');
});

When('Delete a review', async () => {
    const userReview = await apiHelper.getLastUserReview(testUser.id, testUser.loginCookie);
    const responseDelete = await apiHelper.deleteReview(userReview.id);
    expect(responseDelete.statusCode).to.equal(200);
});

Then('Delete a user', async () => {
    const response = await apiHelper.deleteUser(testUser.id);
    expect(response.statusCode).to.equal(200);
});