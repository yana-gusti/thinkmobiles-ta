const request = require('request');
const fs = require('fs');

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

     loginToGetCookies: async function (email, password) {
            const data = {
                email: email,
                password: password,
                rememberMe: false
            };
            const url = 'https://thinkmobiles.com/api/auth/sign-in/'

            let headers = new Map();
            headers.set("Content-Type", "application/json");
            headers.set("User-Agent", "Thinkmobiles-qa");

            let response = await thisModule.sendRequest("POST", url, JSON.stringify(data), headers);

            let myCookie=response.headers['set-cookie']
            return myCookie
        },

     postPhoto: async (coverImagePath, loginCookie) => {

              const url = 'https://thinkmobiles.com/api/profile/user-info/';
              const headers = {
                  'Accept': 'application/json, text/plain, */*',
                  'User-Agent': 'Thinkmobiles-qa',
                  'Cookie': loginCookie,
                  'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryoexruEpnXo5TFDfY'
                };
              const avatarImage = fs.readFileSync(coverImagePath);
              return await thisModule.sendRequest('POST', url, null, headers, { formData: {avatarImage:fs.createReadStream(coverImagePath) } });
            }
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