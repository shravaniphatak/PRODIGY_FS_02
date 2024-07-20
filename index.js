const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employees');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
