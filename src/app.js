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

export default app;