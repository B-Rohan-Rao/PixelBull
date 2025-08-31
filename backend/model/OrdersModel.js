const { model } = require('mongoose');

const { OrdersSchema } = require('../schemas/OrdersSchema');
const OrdersModel = model('OrdersModel', OrdersSchema);

module.exports = { OrdersModel };