const express = require('express');
const cors = require('cors');
// const db = require('better-sqlite3')('database.db');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose()


const app = express(); 

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('tiny'))


app.use((req, res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();

});
app.use(express.json({limit:'10mb'}))
let db = new sqlite3.Database('database.db', (err) => {
if (err){
    console.err(err.massage);
}
console.log('connected to be access database')
})

//  Create the table for Registor
const createRegisterTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS register (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `;
    db.prepare(sql).run();
};

createRegisterTable();

// Insert a new register
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const sql = `
        INSERT INTO register (name, email, password)
        VALUES (?, ?, ?)
    `;
    const info = db.prepare(sql).run(name, email, password);
    res.status(201).json({ id: info.lastInsertRowid });
});

// Get all register items
app.get('/register', (req, res) => {
    const sql = `
        SELECT * FROM register
    `;
    const rows = db.prepare(sql).all();
    res.json(rows);
});

// Get a register item by id
app.get('/register/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT * FROM register
        WHERE id = ?
    `;
    const row = db.prepare(sql).get(id);
    if (row) {
        res.json(row);
    } else {
        res.status(404).json({ error: 'Details not found' });
    }
});

// Update a register item by id
app.put('/register/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const sql = `
        UPDATE register
        SET name = ?, email = ?, password = ?
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(name, email, password, id);
    if (info.changes > 0) {
        res.json({ message: 'Your details have been updated successfully' });
    } else {
        res.status(404).json({ error: 'Details not found' });
    }
});

// Delete a register item by id
app.delete('/register/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM register
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(id);
    if (info.changes > 0) {
        res.json({ message: 'Details deleted successfully' });
    } else {
        res.status(404).json({ error: 'Details not found' });
    }
});

// Login route
app.post('/validatePassword', (req, res) => {
    const { email, password } = req.body;
    const sql = `
      SELECT * FROM register
      WHERE email = ? AND password = ?
    `;
    db.prepare(sql).get(email, password, (err, row) => {
      if (err) {
        throw err;
      }
      if (row) {
        res.send({ validation: true });
      } else {
        res.send({ validation: false });
      }
    });
  });

//   Create the table for todo 
  const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS home (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            priority TEXT CHECK(priority IN ('easy', 'medium', 'hard'))
        )
    `;
    db.prepare(sql).run();
  };
  
  createTable();

// Insert a new todo
app.post('/home', (req, res) => {
    const { title, description, priority } = req.body;
    const sql = `
        INSERT INTO home (title, description,priority)
        VALUES (?, ?, ?)
    `;
    const info = db.prepare(sql).run(title, description, priority);
    res.status(201).json({ id: info.lastInsertRowid });
});

// Get all todo items
app.get('/home', (req, res) => {
    const sql = `
        SELECT * FROM home
    `;
    const rows = db.prepare(sql).all();
    res.json(rows);
});

// Get a todo item by id
app.get('/home/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT * FROM home
        WHERE id = ?
    `;
    const row = db.prepare(sql).get(id);
    if (row) {
        res.json(row);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Update a todo item by id
app.put('/home/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, priority } = req.body;
    const sql = `
        UPDATE home
        SET title = ?, description = ?, priority = ?
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(title, description, priority, id);
    if (info.changes > 0) {
        res.json({ message: 'Your Todo have been updated successfully' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Delete a todo item by id
app.delete('/home/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM home
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(id);
    if (info.changes > 0) {
        res.json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});


app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000')
})