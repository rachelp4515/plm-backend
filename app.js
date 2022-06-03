// I have an idea of how the back end should be structured but back end is not really my specialty, so unless asked I'll let you guys 
// decide on the structuring. 
const express = require('express')
const app = express()
const port = port.process.env || 4000



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})