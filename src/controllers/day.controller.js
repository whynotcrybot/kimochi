import HTTPStatus from 'http-status'
import Day from '../models/day.model.js'

export function getDays (req, res) {

}

export function getDay (req, res) {

}

export async function createDay (req, res, next) {
  try {
    return res
      .status(HTTPStatus.CREATED)
      .json(await Day.createDay(req.body))
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export function deleteDay (req, res) {

}
