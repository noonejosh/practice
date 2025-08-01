import React, {useState} from 'react';

function Arrays(){
    const [food, setFood] = useState(['Pizza', 'Burger', 'Pasta']);

    function handleAddFood(e){
        
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value ="";
        
        //using spread operator
        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        //_ is used to ignore the first argument (the element itself)
        //using filter to remove the item at the specified index
        setFood(food.filter((_, i) => i !== index));
        
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                )}
            </ul>
            <input type="text" placeholder="Add food" id='foodInput' />
            <button onClick={handleAddFood}>Add Food</button>
            
        </div>
    );
}

export default Arrays