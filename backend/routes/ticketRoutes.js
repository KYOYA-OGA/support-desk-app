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

// Re-route into note router
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getTickets).post(protect, createTickets);

router
  .route('/:id')
  .get(protect, getTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

module.exports = router;
