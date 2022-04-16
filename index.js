const express = require('express')
const app = express() // аналог http.createServer




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is runnin on port ${PORT}`);
})