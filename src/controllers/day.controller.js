import HTTPStatus from 'http-status'
import Day from '../models/day.model.js'

export async function getDays (req, res, next) {
  try {
    return res
      .status(HTTPStatus.OK)
      .json(await Day.list())
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}

export async function getDay (req, res, next) {
  try {
    return res
      .status(HTTPStatus.OK)
      .json(await Day.findByDate(req.params.date))
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
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

export async function deleteDay (req, res, next) {
  try {
    await Day.removeByDate(req.params.date)
    return res.sendStatus(HTTPStatus.OK)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST
    return next(err)
  }
}
