import mongoose from 'mongoose';
import validator from "validator";

const {Schema, model, models} = mongoose;

const foodSchema = new Schema({
    plant: String,
       slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isSlug(value)) throw new Error("Invalid slug");
        }
    },
    url: String,

    tomatoStuff: {
      growType: { 
          type: String,
          enum: ["Determinate", "Indeterminate"]
      },
      usage: [String]
    },
    fullName: String,
    image: String,
    attributes: {
      plantType: String,
      root: {
        depth: {
          min: Number,
          max: Number
        },
        type: {
            type: String,
            enum: ["Adventitious", "Fibrous", "Rhizome", "Taproot"]
        }
      },
      soil: {
        conditions: String,
        pH: {
          min: Number,
          max: Number
        }
      },
      sun: {
        exposure: String,
        hoursPerDay: Number
      },
      yearType: {
          type: String,
          enum: ["Annual", "Biennial", "Perennial"]
      }
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
        transplanting:String
      },
      grow: {
        daysToHarvest: Number,
        height: {
          min: Number,
          max: Number
        }
      }
    },
    notes: String
    
});

const Food = models.Food || model('Food', foodSchema);

module.exports = Food;