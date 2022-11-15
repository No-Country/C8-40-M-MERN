import { Schema, model } from "mongoose";

const categoriesSchema = new Schema({
    name: {
        type: String,
        enum: ['Frontend', 'Backend', 'QA', 'Testing', 'UX/UI', 'DevOps', 'Architecture', 'Data Science','Machine learning'],
        default: 'Frontend',
        require: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
});

export default model('category', categoriesSchema);
