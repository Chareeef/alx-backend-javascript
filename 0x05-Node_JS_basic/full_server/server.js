import express from 'express';
import router from './routes/index';

// Create app
const app = express();

// Use routes
app.use('/', router);

// Listen from port 1245
app.listen(1245);

// Export app
export default app;
