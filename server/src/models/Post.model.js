import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    resource: {
      type: String,
      enum: ['Video', 'Image', 'Code'],
      default: 'Code',
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
  },
  {
    timestamp: true,
  }
);

export default model('post', postSchema);
