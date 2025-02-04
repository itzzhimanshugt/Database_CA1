import mongoose from "mongoose"

const restrauntSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    item: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    }]
})

export const restraunt = mongoose.model("restraunt",restrauntSchema)