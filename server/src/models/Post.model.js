import { Schema, model } from "mongoose";

const postSchema =  new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    resource: [{
        video: {
            type: String,
            require: true,
        },
        code: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true
        }
    }],
    date: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    l__programing: {
        type: Schema.Types.ObjectId,
        ref: 'l__programing'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    ranking: {
        type: Number, 
    }
    
},
{
        timestamp: true
    }

)


export default model('post', postSchema)