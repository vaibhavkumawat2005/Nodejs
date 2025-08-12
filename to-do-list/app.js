const express = require("express");

const app = express()

const port = 8001;

const path = require("path")

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));


const task = []

app.post("/addTask" , (req,res) => {
    task.push(req.body.task)
    return res.redirect("/")

})

app.post("/delete/:id" , (req,res) => {
    const id= parseInt(req.params.id)
    task.splice(id,1);
    return res.redirect("/")

})




app.get("/" ,  (req,res) => {

    return res.render("todo-list" , {task})



})



app.listen(port, (err) => {
    err? console.log(err) : console.log("server is running on the port", port);


})