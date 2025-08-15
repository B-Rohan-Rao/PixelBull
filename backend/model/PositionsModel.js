const { model } = require('mongoose');

const { PositionsSchema } = require('../schemas/PositionsSchema');

const PositionsModel = model('PositionModel', PositionsSchema);

module.exports = { PositionsModel };