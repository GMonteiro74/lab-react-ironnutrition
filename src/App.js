
import './App.css';
import foodsJSON from "./foods.json";
import React, {useState} from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';
import { Row } from "antd";

// import SearchBar from './SearchBar';

function App() {

  const [foods, setFoods] = useState(foodsJSON);

  const [foodForm, setFoodForm] = useState(false);

  const toggleFoodForm = () => {
      setFoodForm(!foodForm);       
  }

  const addFood = (newFood) => {
    setFoods([...foods, newFood])
  }
  
  const deleteFood = (name) => {
    setFoods(foods.filter(food => food.name !== name))
  }

//   const updateSearch = (input) => {
//     const filtered = foods.filter(food => {
//      return food.name.toLowerCase().includes(input.toLowerCase())
//     })
//     setFoods(filtered);
//  }

  const filterFoods = (foods, query) => {
    if(!query) {
      return foods;
    }
    return foods.filter(food => {
      const foodName = food.name.toLowerCase();
      return foodName.includes(query);
    })
  }

  const { search } = window.location;
  const query = new URLSearchParams(search).get('search-bar');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredFoods = filterFoods(foods, searchQuery);


  return (
    <div className='App'>

    <button onClick={toggleFoodForm}>{foodForm ? 'Hide Form' : 'Add Food'}</button>
    {/* <AddFoodForm setNewFood={addFood} /> */}
    {foodForm ? <AddFoodForm setNewFood={addFood} /> : ''}

    <div>
    <h1>Food List</h1>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Row gutter={[4, 4]}>

      {filteredFoods.map(food => <FoodBox food={food} eliminateFood={deleteFood}/>)}

      {foods.length < 1 ? <h1>There is no food left :(</h1> : ''}

    </Row>
    </div>

    </div>
  );
}

export default App;
