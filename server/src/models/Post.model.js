import { Schema, model } from 'mongoose';

import mongoosePaginate from 'mongoose-paginate-v2';

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
      enum: ['video', 'image', 'document'],
      default: 'document',
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
    programmingL: {
      type: Schema.Types.ObjectId,
      ref: 'programmingL',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    ranking: {
      type: Number,
      min: 0,
      max: 5,
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
  { timestamps: true }
);

postSchema.methods.toJSON = function idSetter() {
  const { _id, ...post } = this.toObject();
  post.id = _id;
  return post;
};

postSchema.plugin(mongoosePaginate);

export default model('post', postSchema);
