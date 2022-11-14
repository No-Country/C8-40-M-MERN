import { Schema, model } from "mongoose";

const l__programingSchema = new Schema({
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

export default model('l__programing', l__programingSchema);