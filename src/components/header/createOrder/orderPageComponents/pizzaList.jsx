import { Link } from "react-router-dom";

function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <h2>{pizza.isim}</h2>
          <Link to={`/order/${pizza.id}`}>
            <button>Sipariş Ver</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
