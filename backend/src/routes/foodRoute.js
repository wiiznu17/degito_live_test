const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM foods
      ORDER BY id ASC`)
    console.log(result.rows)
    res.json(result.rows);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;

