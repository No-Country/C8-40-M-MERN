import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        enum: ['Frontend', 'Backend', 'QA', 'Testing', 'UX/UI', 'DevOps', 'Architecture', 'Data Science','Machine Learning'],
        default: 'Frontend',
        require: true,
    },
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
});

export default model('category', categorySchema);
