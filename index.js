const express = require('express')
const app = express();
const cors = require("cors");
const port = 5000
const chef = require("./data/chef.json")

app.use(cors());


app.get('/', (req, res) => {
  res.send('Savory selections Running...')
});

app.get("/chef", (req, res)=>{
    res.send(chef)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})