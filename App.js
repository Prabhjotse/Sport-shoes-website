import Navigation from './Navigation/Nav';
import './App.css';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
//Database
import products from "./db/data";
import Card from './components/Card';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)

  //----------Input Filter-----------
  const [query, setQuery] = useState("")


  const handleInputChange = event =>{
    setQuery(event.target.value);
  };



  const filteredItems = products.filter((product) =>
  product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  //----------Radio Filter--------

  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }


  //-------Button Filter----------
  const handleClick = event =>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filteredProducts = products;

    //Filtering Input Items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) => 
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected 
      
      );

    }

return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>(
  <Card 
  key={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  newPrice={newPrice}
  prevPrice={prevPrice}
  />
));
  }


  const result = filteredData(products,selectedCategory,query);





  return (
    <>
     <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
      
      
          </>
  );
}

export default App;
