const express = require('express');
const app = express();
const PORT = 3000;



// Serve the login form
app.get('/', (req, res) => {
  console.log('End Part');
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


