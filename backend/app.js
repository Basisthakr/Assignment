const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample data
const customers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const products = [
  { id: 1, name: 'Laptop', price: 500 },
  { id: 2, name: 'Phone', price: 300 }
];

const sales = [
  { id: 1, customerId: 1, productId: 2, date: '2025-08-31' }
];

// Routes
app.get('/api/customers', (req, res) => res.json(customers));
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/sales', (req, res) => res.json(sales));
app.get('/api', (req, res) => res.send('Hello, Azure!'));

// Health check route
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
