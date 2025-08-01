

function List({items= [], category= "Category"}) {

    const itemList = items;
    const categories = category;
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical sort
    //fruits.sort((a,b) => a.calories - b.calories); //Sort by calories
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse alphabetical sort
    //fruits.sort((a,b) => b.calories - a.calories); //Reverse sort by calories
    //display all fruits
    const listItems = itemList.map(item => {
        if(typeof item.id !== 'number') {
            console.error("Invalid item data:", item);
            return null; // Skip invalid items
        }
        return (
            <li key={item.id}>
                {item.name}: &nbsp;
                <b>{item.calories}</b>
            </li>
        );
        }
    );

    //filter low calorie fruits
    //const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);

    //display low calorie fruits that is less than 100 calories
    // const listItems = lowCalorieFruits.map(lowCal =>
    //     <li key={lowCal.id}>
    //         {lowCal.name}: &nbsp;
    //         <b>{lowCal.calories}</b></li>
    // );

    //filter high calorie fruits
    //const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);
    //display high calorie fruits that is 100 calories or more
    // const listItems = highCalorieFruits.map(highCal =>
    //     <li key={highCal.id}>
    //         {highCal.name}: &nbsp;
    //         <b>{highCal.calories}</b></li>
    // );

    return(
        <>
            <h3 className="list-category">{categories}</h3>
            <ol className="list-item">{listItems}</ol>
        </>
    );
}

export default List