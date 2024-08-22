'use strict';
var axios = require('axios')
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async leadFromCalls(ctx, token) {
        var config = {
            method: 'get',
            url: 'https://api-smartflo.tatateleservices.com/v1/call/records',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxMjU3MSwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY2NjI3MjA1OSwiZXhwIjoxOTY2MjcyMDU5LCJuYmYiOjE2NjYyNzIwNTksImp0aSI6Ijc5NWVuRWxXR2tYYWFXWDgifQ.xyHI-zOFuhdFRhW0TTWYz0B_OImI0Y4tokwQEfpNo2Q'
            },
        };

        const result = axios(config)
            .then(function (response) {
                console.log(response.data);
                const lastOne = [];
                response.data.results.map(element => {
                    lastOne.push(Object.assign(element));
                })
                const data = strapi.query('cdr').createMany(lastOne);
                return data;

            })
            .catch(function (error) {
                console.log(error);
            });
        return result;
    }
};
