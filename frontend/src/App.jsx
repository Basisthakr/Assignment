import { useEffect, useState } from "react";

const BACKEND_API = "http://74.235.122.188:5000/api";

function App() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_API}/customers`)
      .then((res) => res.json())
      .then(setCustomers)
      .catch(console.error);

    fetch(`${BACKEND_API}/products`)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);

    fetch(`${BACKEND_API}/sales`)
      .then((res) => res.json())
      .then(setSales)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Retail Dashboard</h1>

      <section>
        <h2>Customers</h2>
        <ul>
          {customers.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Products</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} (${p.price})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Sales</h2>
        <ul>
          {sales.map((s) => (
            <li key={s.id}>
              Customer #{s.customerId} bought Product #{s.productId} on {s.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
