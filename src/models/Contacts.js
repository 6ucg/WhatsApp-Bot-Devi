import { Schema, model } from 'mongoose'

const schema = new Schema({
    ID: {
        type: String,
        unique: true,
        required: true
    },

    data: [
        {
            id: String,
            notify: String,
            name: String,
            verifiedName: String,
            status: String,
            imgUrl: String
        }
    ]
})

export const contacts = model('contacts', schema)