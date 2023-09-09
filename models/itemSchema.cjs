//building itemSchema here
const item = require('./item.cjs');
const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
  {
    name: String,
    description: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
    image: String,
    countInventory: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
