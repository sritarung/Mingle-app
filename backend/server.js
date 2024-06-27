import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connectToMongoDb from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';


const app = express();

dotenv.config();

const PORT= process.env.PORT || 4000;

app.use(cookieParser())
app.use(express.json())//parse requests with json payloads

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server running on port ${PORT}!`)
});