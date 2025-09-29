const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  potStyle: { type: String, required: true },
  category: { type: String, enum: ['interior', 'exterior'], required: true },
  size: { type: String, enum: ['normal', 'XL'], default: 'normal' },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Plant', plantSchema);
