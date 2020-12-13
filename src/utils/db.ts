import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://instagram_access:desafioreportei777@desafio-reportei.zpzhw.mongodb.net/instool?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export const db = mongoose.connection;
