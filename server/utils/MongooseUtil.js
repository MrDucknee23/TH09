const mongoose = require('mongoose');

const uri =
  'mongodb+srv://huy2374802010192_db_user:jca51HCYurwTufjs@icecream.gaoghyj.mongodb.net/shoppingonline';

mongoose
  .connect(uri, {
    family: 4 // 👈 ÉP dùng IPv4, FIX ReplicaSetNoPrimary
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
