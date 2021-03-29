const {Given, When, Then} = require('@cucumber/cucumber');
const apiHelper = require('../../helpers/api-helper');
let responseCheck;
let responseSignUp;
let id;



Then(/^I try to login on TM site with new password$/, async () => {
 let email = 'archy787ua@gmail.com';
    let password='mustang';
    id = await apiHelper.login(email, password);
    console.log(`User ID: ${id}`);
});
Then(/^I try to login on TM site with old password$/, async () => {
 let email = 'archy787ua@gmail.com';
    let password='lolyP0P11';
    id = await apiHelper.login(email, password);
    console.log(`User ID: ${id}`);
});

When(/^I send request to change my password to new$/, async () => {
let email = 'archy787ua@gmail.com';


    let password = 'lolyP0P11';
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
    headers.set("cookie", "_ga=GA1.2.1370260047.1613550172; _fbc=fb.1.1614154723094.IwAR2Mi4hCFpMaxsupuntum7NWPY0Hu4cz2D3ROnRe_PE1Fye6wWmO1yNiIa0; _fbp=fb.1.1614154723098.77990140; _atcid=TcpqpHAj8jr5vk; _atcid-pt=1614872504404; open_chatra=true; _pubcid=0310a4e7-3647-4f31-8359-4cbfdb6c1155; _pubcid=0310a4e7-3647-4f31-8359-4cbfdb6c1155; __gads=ID=e8c078f95b93a515:T=1615970801:S=ALNI_MYAJ9_LmLW6lY6x1F3riIGkOjPQoQ; _pbjs_userid_consent_data=4181189034313233; cto_bidid=mBu8QV9kZ0JxeXNxMkNOMGFtcVBEczlIWWU3NnlQbXFhcFBKTGR2V0dwUzZpS0JYTm40Z1lFa0pXQ0h5STRud2JsMU40OFMzZmZScUJxRUV4NzVFWmFhcWdRZmklMkJLZUwlMkZBMGVHeDk2enY2YURCSTU0c0R5MGROVHY5N0FvYmxTRFQ5U3Q; cto_bundle=Gwh16l9NMVpBdWlqM2plZ056ZHV2amw0dTRRUHR6cUtlM042RlF4cWp1TlJIUWpPWHBRSiUyRk5YY0xIVWV0M1o1R2JCazVSYndWbDZKemhnd0YzRXhHMm1xMmpaMiUyQmNiOURqdnJGWElObEt2cnJIRmdnMElWVjFTRjg4ekNXUiUyRmolMkZicSUyQndmUjlTT1puTnNmTkF4Undxb2UwZERBJTNEJTNE; _gid=GA1.2.810112280.1616999998; AMP_TOKEN=$NOT_FOUND; _gat_UA-89094058-1=1; qwertySId=s:gVGPjKCuqA6Q-XgV0pNBxze-L3xwlWAE.Ptkc8BwfRjIwivGJvS9snS+6H8tXRf81uv2bQYcyJL8");

        responseSignUp = await apiHelper.sendRequest("POST", urlProfile, JSON.stringify(dataPass), headers);
             console.log(responseSignUp.request.body);
             console.log(responseSignUp.request.headers);
             console.log(responseSignUp.body);
             console.log(`SignUp statusCode: ${responseSignUp.statusCode}`);


});


