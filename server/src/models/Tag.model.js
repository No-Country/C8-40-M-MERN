import { Schema, model } from "mongoose";

const tag = new Schema({
    name: {
        type: String,
        enum: ['documentation', 'solutions', 'article', ' news'],
        default:'documentation',
        require: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
});

export default model('tag', tag);