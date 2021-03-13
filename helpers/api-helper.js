const request = require('request');

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

    postDraft: async (title, body, coverImage, loginCookie) => {
        const url = 'https://thinkmobiles.com/api/post/draft/';

        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };

        return await sendRequest('POST', url, null, headers, { formData: { title, body } });
    },

    deletePost: async (postId) => {
        const url = 'https://thinkmobiles.com/api/testing/post' + postId + '/';
        const headers = {
            'User-Agent': 'Thinkmobiles-qa',
            'X-Testing-Token': 'fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8',
            'Cookie': loginCookie
        };
        return await sendRequest('DELETE', url, null, eaders)
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
