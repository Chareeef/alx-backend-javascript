import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Create router
const router = express.Router();

// 'GET /' route
router.get('/', AppController.getHomepage);

// 'GET /students' route
router.get('/students', StudentsController.getAllStudents);

// 'GET /students/:major' route
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Export router
export default router;
