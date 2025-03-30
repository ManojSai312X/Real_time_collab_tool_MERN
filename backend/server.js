const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/documents');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

dotenv.config();

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB().then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);


// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('New WebSocket connection');
  
  socket.on('joinDocument', (documentId) => {
    socket.join(documentId);
    console.log(`User joined document ${documentId}`);
  });
  
  socket.on('documentUpdate', ({ documentId, title, content }) => {
    socket.to(documentId).emit('receiveUpdate', { title, content });
  });
  
  socket.on('sendMessage', ({ documentId, message }) => {
    socket.to(documentId).emit('receiveMessage', message);
  });
});

const PORT = process.env.PORT || 5176;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use. Trying port ${Number(PORT)+1}...`);
    server.listen(Number(PORT)+1);
  } else {
    console.error('Server error:', err);
  }
});