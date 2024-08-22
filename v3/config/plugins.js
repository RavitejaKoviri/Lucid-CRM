// module.exports= ({ env }) => ({
//     email: {
//         provider: 'sendgrid',
//         providerOptions: {
//             apiKey: env('SENDGRID_API_KEY'),
//         },
//         settings:{
//             defaultFrom: "hashwanth445@gmail.com",
//             defaultReplyTo: "hashwanth445@gmail.com"
//         },
//     },

// }); 

module.exports = ({ env }) => ({
    // ...
    email: {
        provider: 'smtp',
        providerOptions: {
            host: 'mail.websoc.ai', //SMTP Host
            port: 465, //SMTP Port
            secure: true,
            username: 'ab@websoc.ai',
            password: 'Welcome@1234',
            rejectUnauthorized: true,
            requireTLS: true,
            connectionTimeout: 1,
        },
    },
    upload: {
        config: {
          providerOptions: {
            sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
          }
        }
      }
    // ...
})
