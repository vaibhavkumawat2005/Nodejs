const express  = require("express")

const app = express()

const port  = 8001;

const connectdb = require("./config/db")

app.use(express.urlencoded({extended:false}))
const path = require("path")



connectdb()
app.set("view engine", "ejs");
app.use(express.json())

app.use(express.static(path.join(__dirname,"public")))
app.use("/" , require("./routes/staticRouter"))
app.use("/book" , require("./routes/book"))



app.listen(port , (err) => {
    err? console.log(err): console.log("sever is connected" , port)
})