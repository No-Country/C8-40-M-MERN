import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    userName: { type: String, required: true, unique: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    avatar: { type: String },

    isActive: { type: Boolean, default: true },

    role: { type: String, enum: ['admin', 'dev'], default: 'dev' },

    post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function idSetter() {
  const { _id, ...user } = this.toObject();
  user.id = _id;
  return user;
};

export default model('user', userSchema);
