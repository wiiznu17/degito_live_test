require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4000;

const foodRoute = require('./routes/foodRoute');

app.use(cors());
app.use(express.json()); // เพื่อให้ client สามารถส่งข้อมูลเป็น json 

// คำแนะนำ: config database connect

// คำแนะนำ: สร้าง API
// - path: /api/foods
// - method: get
app.use('/api/foods', foodRoute);

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
