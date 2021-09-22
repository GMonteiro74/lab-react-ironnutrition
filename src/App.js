import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, {useState} from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

// import SearchBar from './SearchBar';

function App() {

  const [foods, setFoods] = useState(foodsJSON);

  const [input, setInput] = useState('');

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

  const updateSearch = (input) => {
    const filtered = foods.filter(food => {
     return food.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setFoods(filtered);
 }

  return (
    <div className='App'>

    <button onClick={toggleFoodForm}>{foodForm ? 'Hide Form' : 'Add Food'}</button>
    {/* <AddFoodForm setNewFood={addFood} /> */}
    {foodForm ? <AddFoodForm setNewFood={addFood} /> : ''}

    <div>
    <h1>Food List</h1>

      <SearchBar key={foods} setKey={updateSearch}/>

      {foods.map(food => <FoodBox food={food} eliminateFood={deleteFood}/>)}

      {foods.length < 1 ? <h1>There is no food left :(</h1> : ''}
    </div>

    </div>
  );
}

export default App;
