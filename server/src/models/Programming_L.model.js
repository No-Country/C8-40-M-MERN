import { Schema, model } from 'mongoose';

const Programming_LSchema = new Schema({ name: { type: String,
  required: true,
  unique: true},
post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
], });

Programming_LSchema.methods.toJSON = function () {
  const { __v, _id, ...programming_L } = this.toObject();
  programming_L.id = _id;
  return programming_L;
};

export default model('programming_l', Programming_LSchema);
