import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    resource: {
      type: String,
      enum: ['video', 'image', 'code'],
      default: 'code',
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    programming_l: {
      type: Schema.Types.ObjectId,
      ref: 'programming_l',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    ranking: {
      type: Number,
    },
    technology: {
      type: Schema.Types.ObjectId,
      ref: 'technology',
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'tag',
    },
  },
  {
    timestamp: true,
  }
);

postSchema.methods.toJSON = function () {
  const { __v, _id, ...post } = this.toObject();
  post.id = _id;
  return post;
};

export default model('post', postSchema);
