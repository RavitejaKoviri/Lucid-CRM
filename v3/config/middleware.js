module.exports = {
  //...
  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    formidable: {
      maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:4005','*'] // Add your frontend URL here
    },
  },
};