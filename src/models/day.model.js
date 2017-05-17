import mongoose, { Schema } from 'mongoose'

const DaySchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    tile: {
      type: Schema.Types.ObjectId,
      ref: 'Tile',
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'days'
  }
)

DaySchema.statics = {
  createDay (args) {
    return this.create({
      ...args
    })
  }
}

let Day

try {
  Day = mongoose.model('Day')
} catch (e) {
  Day = mongoose.model('Day', DaySchema)
}

export default Day
