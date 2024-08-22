module.exports = {

    async sendMail(ctx) {
        const body = ctx.request.body
        const sendFrom = body.from
        const sendTo = body.to
        strapi.log.debug(`Trying to send an email to ${sendTo}`)

        try {
            const emailOptions = {
                from: sendFrom,
                to: sendTo,
                subject: ctx.request.body.subject,
                html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
                message: ctx.request.body.message
            }
            await strapi.plugins['email'].services.email.send(emailOptions)
            strapi.log.debug(`Email sent to ${sendTo}`)
            ctx.send({ message: 'Email sent' })
        } catch (err) {
            strapi.log.error(`Error sending email to ${sendTo}`, err)
            ctx.send({ error: 'Error sending email' })
        }
    },
    async getAccessToken(ctx) {
        try {
          const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
            params: {
              grant_type: 'authorization_code',
              code: ctx.request.body.authCode,
            //   redirect_uri: 'https%3A%2F%2Fswift-front.netlify.app',
              client_id:'78wddx39e6zyux',
              client_secret: "QD3wOyGZ365vOZcE"
            },
          })
          console.log(response);
          return response;
        } catch (error) {
          console.log(error)
        }
      }
    //   getAccessToken(authCode);
}