import React from 'react';
import { Card, Col, Button } from "antd";


export default function FoodBox({food, eliminateFood}) {
    
    return (
        
        <Col span={6}>
        
            <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={food.image} alt='this is the food' height={60} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total calories: {food.calories * food.servings}</b> kcal
            </p>
            <Button type='primary' onClick={() => eliminateFood(food.name)}>Delete</Button>
            </Card>            
        </Col>
        
    )
}
