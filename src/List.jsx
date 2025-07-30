

function List(){
    const fruits = [
        {id: 1,name:'Apple', calories: 95}, 
        {id: 2,name:'Banana', calories: 105}, 
        {id: 3,name:'Cherry', calories: 50}, 
        {id: 4,name:'Date', calories: 282}, 
        {id: 5,name:'Elderberry', calories: 73}];
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical sort
    //fruits.sort((a,b) => a.calories - b.calories); //Sort by calories
    fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse alphabetical sort
    //fruits.sort((a,b) => b.calories - a.calories); //Reverse sort by calories

    //display all fruits
    // const listItems = fruits.map(fruit =>
    //     <li key={fruit.id}>
    //         {fruit.name}: &nbsp;
    //         <b>{fruit.calories}</b></li>
    // );

    //filter low calorie fruits
    //const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);

    //display low calorie fruits that is less than 100 calories
    // const listItems = lowCalorieFruits.map(lowCal =>
    //     <li key={lowCal.id}>
    //         {lowCal.name}: &nbsp;
    //         <b>{lowCal.calories}</b></li>
    // );

    //filter high calorie fruits
    const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);
    //display high calorie fruits that is 100 calories or more
    const listItems = highCalorieFruits.map(highCal =>
        <li key={highCal.id}>
            {highCal.name}: &nbsp;
            <b>{highCal.calories}</b></li>
    );

    return(
        <ol>{listItems}</ol>
    );
}

export default List