import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    enum: [
      'frontend',
      'backend',
      'qa',
      'testing',
      'ux/ui',
      'devops',
      'architecture',
      'datas cience',
      'machine learning',
    ],
    default: 'frontend',
    require: true,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

categorySchema.methods.toJSON = function () {
  const { __v, _id, ...category } = this.toObject();
  category.id = _id;
  return category;
};

export default model('category', categorySchema);
