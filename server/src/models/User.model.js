import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'Dev'],
        default: 'Dev'
        },
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
});

export default model('user', userSchema);
