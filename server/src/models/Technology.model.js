import { Schema, model } from "mongoose";

const technologies = new Schema({
    name: {
        type: Array,
        default: [],
        require: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
});

export default model('technology', technologies);