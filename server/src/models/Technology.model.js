import { Schema, model } from 'mongoose';

const technologySchema = new Schema({ name: { type: String,
  required: true,
  unique: true},
post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
], });

technologySchema.methods.toJSON = function () {
  const { __v, _id, ...technology } = this.toObject();
  technology.id = _id;
  return technology;
};

export default model('technology', technologySchema);
