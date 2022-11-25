const express=require("express")
const app=express()
const port=4000
const bodyParser=require("body-parser")
const cors=require("cors")

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())


app.get("/",(req,res)=>{
	res.send("hi im a server 4.2 version")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age,password,select,gender}=req.body
	console.log(name,password,age,select,gender,"values")
	res.send("data submitted")
})


app.listen(port,()=>console.log("server is working"))