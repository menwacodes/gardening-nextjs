import mongoose from 'mongoose';
import validator from "validator";
// ToDo: Refactor to import isSlug and isURL only

const { Schema, model, models } = mongoose;

const flowerSchema = new Schema({
    plant: { type: String, required: true },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isSlug(value)) throw new Error("Invalid slug");
        }
    },
    url: {
        type: String,
        validate(value) {
            if (!validator.isURL(value)) throw new Error("Invalid URL");
        }
    },
    fullName: { type: String, required: true },
    image: String,
    blooms: String,
    wherePlanted: String,
    attributes: {
        attracts: String,
        root: {
            minDepth: Number,
            type: String
        },
        seasonality: {
            type: String,
            enum: ["Annual", "Biennial", "Perennial"]
        },
        soil: {
            conditions: String,
            pH: {
                min: {
                    type: Number,
                    min: 0,
                    max: 14
                },
                max: {
                    type: Number,
                    min: 0,
                    max: 14
                }
            }
        },
        sun: {
            exposure: String
        },
    },
    lifecycle: {
        sow: {
            plantingDepth: Number,
            startSpacing: Number,
            directSow: String,
            indoorStartTimingDays: Number
        },
        seedling: {
            daysToGermination: Number,
            thinning: String,
            transplanting: String
        },
        grow: {
            height: {
                min: Number,
                max: Number
            },
            width: {
                min: Number,
                max: Number
            },
            water: String,
            fertilizer: String
        },
        notes: String
    }
});

const Flower = models.Flower || model('Flower', flowerSchema);

module.exports = Flower;