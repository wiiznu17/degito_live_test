require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());


// คำแนะนำ: config database connect
const pool = new Pool({
  host: "",
  port: "",
  user: "",
  password: "",
  database: "",
});

// คำแนะนำ: สร้าง API
// - path: /api/foods
// - method: get

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});