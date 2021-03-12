const request = require('request');

module.exports = thisModule = {

    sendRequest: (method = 'POST', uri, body, headers, additionalOptions) => {
        return new Promise((resolve, reject) => {
            const options = {
                method,
                uri,
                body,
                headers: mapHeaders(headers),
                agentOptions: {rejectUnauthorized: false},
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
    },

    login: async function (email, password) {
        const data = {
            email: email,
            password: password,
            rememberMe: false
        };
        const url = 'https://thinkmobiles.com/api/auth/sign-in/'

        let headers = new Map();
        headers.set("Content-Type", "application/json");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");

        let response = await thisModule.sendRequest("POST", url, JSON.stringify(data), headers);
        let body = JSON.parse(response.body);
//         console.log(response.request.body);
//         console.log(response.request.headers);
//         console.log(response.body);
//         console.log(response.statusCode);
//         console.log(response.body);
        let user = body['user'];
        let id = user.id;
        return id;
    },



    async sendFormData(url, { coverImage, title, body }, qwetySId) {
        let headers = new Map();
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");
        headers.set("Accept-Encoding", "gzip, deflate, br");
        headers.set("Connection", "keep-alive");
        headers.set("Cookie", qwetySId);

        const fd = {
            title,
            body
        };

        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url,
                formData: fd,
                headers: mapHeaders(headers),
                agentOptions: { rejectUnauthorized: false }
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
    },

    writePost: async (title, content) => {
        const data = {
            title: title,
            content: content,
        };
        const url = 'https://thinkmobiles.com/api/post/draft/';

        let headers = new Map();
        headers.set("Content-Type", "multipart/form-data");
        headers.set("User-Agent", "Thinkmobiles-qa");
        headers.set("X-Testing-Token", "fsdjdsfJKdfhs723kldsfjkls23890klsdfkljhhvxcLKJsdf98732lkkmsfdjhksf8");
        headers.set("Connection", "keep-alive");
        headers.set("Accept-Encoding", "gzip, deflate, br");

        let response = await thisModule.sendFormData(url, { coverImage: null, title, body }, headers);
    },
};


function mapHeaders(value) {
    let headers = {};
    if (value instanceof Map) {
        value.forEach((value, key) => {
            headers[key] = value;
        });
        return headers;
    } else {
        return value;
    }
}
