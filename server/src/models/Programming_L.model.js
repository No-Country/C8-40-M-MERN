import { Schema, model } from 'mongoose';

const Programming_LSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

export default model('programming_l', Programming_LSchema);
