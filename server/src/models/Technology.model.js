import { Schema, model } from "mongoose";

const technologySchema = new Schema({
    name: {
        type: Array,
        default: [],
        require: true,
    },
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
});

export default model('technology', technologySchema);