const express = require('express');
const {
  getTickets,
  getTicket,
  createTickets,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTickets).post(protect, createTickets);

router
  .route('/:id')
  .get(protect, getTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

module.exports = router;
