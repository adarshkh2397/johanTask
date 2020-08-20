export const {
    PORT = 5000,
    NODE_ENV = 'development',
    MONGO_URI = 'mongodb+srv://tushar0707:Adarsh*123@cluster0.af4f9.mongodb.net/users?retryWrites=true&w=majority',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secret!session',
    SESS_LIFETIME = 1000 * 60 * 60 * 2
  } = process.env;