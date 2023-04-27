import mongoose from "mongoose";

// const {Schema, model} = mongoose; // if not using nextjs
const {Schema, model, models} = mongoose;

const testSchema = new Schema({
    plant: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    attributes: {
        attracts: {type: String},
        root: {
            minDepth: {type: Number},
            type: {type: String}
        }
    }

});

// const TestCreate = model('TestCreate', testSchema); // if not using nextjs
const TestCreate = models.TestCreate || model(TestCreate, testSchema);

export default TestCreate;
// module.exports = TestCreate;