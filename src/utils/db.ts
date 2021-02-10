import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://instagram_access:ppOySIhPdJo2JHm8@dark-labs.zpzhw.mongodb.net/instool?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
console.log('MONGO [OK]');
export const db = mongoose.connection;
