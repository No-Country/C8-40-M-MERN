/* eslint-disable camelcase */
import { Schema, model } from 'mongoose';

const ProgrammingLSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
});

ProgrammingLSchema.methods.toJSON = function idSetter() {
  const { _id, ...programmingL } = this.toObject();
  programmingL.id = _id;
  return programmingL;
};

export default model('programmingL', ProgrammingLSchema);
