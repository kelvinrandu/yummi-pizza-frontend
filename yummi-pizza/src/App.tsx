import React from 'react';
import './App.css';
import Product from './components/Product';



const products = [

  {
    id: 1,
    name: "Apple",
    description: "Red apples",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 2,
    name: "A Cat",
    description: "CCO (Chief Cat Officer)",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 3,
    name: "Milk",
    description: "Milk for the lactose tollerent",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },


  {
    id: 5,
    name: "Orange",
    description: "Orange are orange",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }

];

const App: React.FC = () => {
  return (
    <main className="pa3 pa5-ns flex flex-wrap">
        {
          products.map(p => <Product key={p.id} {...p} />)
        }

    </main>
  );
}

export default App;
