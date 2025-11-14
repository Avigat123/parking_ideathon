const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create or open database
const dbPath = path.join(__dirname, "../database.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error connecting to SQLite:", err);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

// Create tables if not exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS parking_lot (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      lat REAL,
      lng REAL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS parking_slot (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lot_id INTEGER,
      slot_number TEXT,
      status TEXT DEFAULT 'free',
      FOREIGN KEY (lot_id) REFERENCES parking_lot(id)
    );
  `);
});

module.exports = db;
