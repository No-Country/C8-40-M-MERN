import { Schema, model } from 'mongoose';

const tagSchema = new Schema({
  name: {
    type: String,
    enum: ['documentation', 'solution', 'article', 'news'],
    default: 'article',
    require: true,
  },
  post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
});

tagSchema.methods.toJSON = function idSetter() {
  const { _id, ...tag } = this.toObject();
  tag.id = _id;
  return tag;
};

export default model('tag', tagSchema);
