import express from "express"



//app.get("/test", (req, res) => {
//   console.log(req.params.id)
//  res.json({ message: "ça marche" })
//})

function cors(req,res,next){
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methodes', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type, x-api-key')
  
  next()
}

const app = express()
app.use(cors)
app.use(express.json())



app.get("/test/:id", (request, response) => {

fetch('https://jsonplaceholder.typicode.com/posts/${request.params.id}')
    .then(res => res.json())
    .then(data => console.log(data));
})

app.listen(3000, () => console.log("http://localhost:3000"))

// GET /users/42  →  { "demande": "42" }

//console.log("bonjour"); affiche bonjour dans la console