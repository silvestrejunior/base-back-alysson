import express from 'express'
import { routes, secureRoutes } from "./routes/userRoute";

export const app = express()
app.use(express.json())
app.use('/api', routes)
app.use('/api', secureRoutes)
