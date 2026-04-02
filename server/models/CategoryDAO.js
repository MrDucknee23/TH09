require('../utils/MongooseUtil');
const Models = require('./Models');
const mongoose = require('mongoose');

const CategoryDAO = {
  async selectAll() {
    const query = {};
    const categories = await Models.Category.find(query).exec();
    return categories;
  },

  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  },

  async insert(category) {
    category._id = new mongoose.Types.ObjectId();
    const result = await Models.Category.create(category);
    return result;
  },

  async update(category) {
    const newvalues = { name: category.name };
    const result = await Models.Category.findByIdAndUpdate(
      category._id,
      newvalues,
      { new: true }
    );
    return result;
  },

  async delete(_id) {
    // validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error('Invalid category ID');
    }

    const result = await Models.Category.findByIdAndDelete(_id);

    // xử lý không tìm thấy
    if (!result) {
      throw new Error('Category not found');
    }

    return result;
  }
};

module.exports = CategoryDAO;