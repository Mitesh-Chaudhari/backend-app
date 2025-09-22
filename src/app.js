// https://jwtsecrets.com/#generator To generatr a JWT secret

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//configure json data
app.use(express.json({
    limit: "16kb"
}));

//configure data from the url
app.use(express.urlencoded({ extended: true }));

//configure for static files
app.use(express.static('public'));

app.use(cookieParser());

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

export default app;