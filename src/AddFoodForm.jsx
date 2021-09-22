import React, {useState} from 'react';
import { Input } from "antd";


export default function AddFoodForm({setNewFood}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name, 
            image, 
            calories,
            servings,
        }
        setNewFood(newFood);
    }


    return (
        <div>

        <h1>Add Food Entry</h1>

        <form onSubmit={handleSubmit}>

            <label>Name</label>
            <Input type='text' onChange={(e) => setName(e.target.value)} value={name} />

            <label>Image</label>
            <Input type='text' onChange={(e) => setImage(e.target.value)} value={image} />

            <label>Calories</label>
            <Input type='text' onChange={(e) => setCalories(e.target.value)} value={calories} />

            <label>Servings</label>
            <Input type='text' onChange={(e) => setServings(e.target.value)} value={servings} />

            <button type='submit'>Add food</button>
        

        </form>


            
        </div>
    )
}
