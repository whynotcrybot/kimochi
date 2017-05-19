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
    }
  },
  {
    timestamps: true,
    collection: 'days'
  }
)

DaySchema.statics = {
  createDay (args) {
    return this.create({
      ...args
    })
  },

  list () {
    return this.find()
      .sort({ date: -1 })
      .populate('tile')
  },

  findById (id) {
    return this.find({ _id: id })
      .populate('tile')
  }
}

let Day

try {
  Day = mongoose.model('Day')
} catch (e) {
  Day = mongoose.model('Day', DaySchema)
}

export default Day
