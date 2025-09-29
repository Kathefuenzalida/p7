const mongoose = require('mongoose');

module.exports = async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado');
  } catch (err) {
    console.error('❌ Error conectando a Mongo:', err);
    process.exit(1);
  }
};
