import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes"
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware"
import loginRoutes from "./routes/login.routes"
import contactRoutes from "./routes/contact.routes"

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactRoutes)

app.use(handleAppErrorMiddeware)

app.listen(3333, () => {
    console.log("Servidor executando")
})