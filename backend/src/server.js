const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const flRoutes = require('./routes/freelancerRoutes')
const emRoutes = require('./routes/employerRoutes')
const projectRoutes = require('./routes/projectRoutes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', userRoutes)
app.use('/fr', flRoutes)
app.use('/em', emRoutes)
app.use('/project', projectRoutes)

app.listen(3001, () => console.log(`listening at http://localhost:3001`))