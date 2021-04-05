const request = require('request');
const fs = require('fs');

const defaultHeaders = {
    'Content-Type': 'application/json',
    'User-Agent': 'Thinkmobiles-qa',
    'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8'
};

module.exports = thisModule = {

    register: async (email, password, firstName, lastName) => {
        const emailCheckUrl = 'https://thinkmobiles.com/api/auth/sign-up-check/';
        const signUpUrl = 'https://thinkmobiles.com/api/auth/sign-up/';

        const signUpData = { email, password, firstName, lastName };
        const responseCheck = await sendRequest('POST', emailCheckUrl, JSON.stringify({ email }), defaultHeaders);

        if (responseCheck.statusCode === 200) {
            return await sendRequest('POST', signUpUrl, JSON.stringify(signUpData), defaultHeaders);
        }

        return '';
    },

    confirmEmail: async email => {
        const url = 'https://thinkmobiles.com/api/testing/user/confirm-email/';
        return await sendRequest('POST', url, JSON.stringify({ email }), defaultHeaders);
    },

    login: async (email, password) => {
        const url = 'https://thinkmobiles.com/api/auth/sign-in/';
        const data = { email, password, rememberMe: false };

        return await sendRequest('POST', url, JSON.stringify(data), defaultHeaders);
    },

    postDraft: async (title, body, coverImagePath, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/post/draft/';
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie,
            'Content-Type': 'multipart/form-data'
        };

        const coverImage = fs.readFileSync(coverImagePath);
        return await sendRequest('POST', url, null, headers, { formData: { title, body, coverImage:fs.createReadStream(coverImagePath) } });
    },

    getLastUserPost: async (userId, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/profile/posts/?id=' + userId + '&status=draft'
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };
        const response = await sendRequest('GET', url, null, headers);
        const body = JSON.parse(response.body);
        return body.data[0];
    },

    deletePost: async (postId, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/testing/post/' + postId + '/';
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };
        return await sendRequest('DELETE', url, null, headers)
    },

    reviewDraft: async ( formData, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/review/';
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie,
            'Content-Type': 'multipart/form-data',
        };
        return await sendRequest('POST', url, null, headers, {formData: { id: formData.id, userId: formData.userId, mode: formData.mode, type: formData.type, target: JSON.stringify(formData.target), overall: JSON.stringify(formData.overall), description: JSON.stringify(formData.description), video: JSON.stringify(formData.video) }});
    },

    getLastUserReview: async (userId, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/profile/reviews/?status=draft&id='+ userId
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };
        const response = await sendRequest('GET', url, null, headers);
        const body = JSON.parse(response.body);
        return body.data[0];
    },

    deleteReview: async (reviewId, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/testing/user-review/' + reviewId + '/';
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };
        return await sendRequest('DELETE', url, null, headers)
    },

    deleteUser: async (userId) => {
        const url = 'https://thinkmobiles.com/api/testing/user/' + userId + '/';
        return await sendRequest('DELETE', url, null, defaultHeaders);
    },
};

const sendRequest = (method = 'POST', url, body, headers, additionalOptions) => {
    return new Promise((resolve, reject) => {
        const options = {
            method,
            url,
            body,
            headers,
            agentOptions: { rejectUnauthorized: false },
            ...additionalOptions
        };

        request(options, function (error, response, _body) {
            if (error) {
                console.error('request error:', error);
                reject(error);
                return;
            }
            resolve(response);
        });
    });
};
