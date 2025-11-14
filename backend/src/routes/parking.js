const express = require("express");
const router = express.Router();
const db = require("../db");

// Test route
router.get("/test", (req, res) => {
  db.get("SELECT datetime('now') as time", [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "SQLite working!", time: row.time });
  });
});

// Get all parking lots
router.get("/lots", (req, res) => {
  db.all("SELECT * FROM parking_lot", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add parking lot
router.post("/lots", (req, res) => {
  const { name, lat, lng } = req.body;

  db.run(
    "INSERT INTO parking_lot (name, lat, lng) VALUES (?, ?, ?)",
    [name, lat, lng],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, name, lat, lng });
    }
  );
});

module.exports = router;
