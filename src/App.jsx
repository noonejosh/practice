
import List from './List';

function App() {
    const itemTypes = item =>
    ({
        id: Number(item.id),
        name: String(item.name),
        calories: Number(item.calories)
    });
    const fruits = [
        {id: "1",name:'Apple', calories: 95}, 
        {id: 2,name:'Banana', calories: 105}, 
        {id: 3,name:'Cherry', calories: 50}, 
        {id: 4,name:'Date', calories: 282}, 
        {id: 5,name:'Elderberry', calories: 73}
    ];
    
    const vegetables = [
        {id: 6,name:'Carrot', calories: 41},
        {id: 7,name:'Broccoli', calories: 55},
        {id: 8,name:'Spinach', calories: 23},
        {id: 9,name:'Potato', calories: 77},
        {id: 10,name:'Cucumber', calories: 16}
    ];

    const fruitsNorm = fruits.map(itemTypes);
    const vegetablesNorm = vegetables.map(itemTypes);

    const isValidItem = item =>
        typeof item.id === 'number' &&
        typeof item.name === 'string' &&
        typeof item.calories === 'number';
    
    const fruitsValid = fruitsNorm.every(isValidItem);
    const vegetablesValid = vegetablesNorm.every(isValidItem);
    
    if (!fruitsValid || !vegetablesValid) {
        console.error("Invalid data in fruits or vegetables");
        return null;
    }
    return(
        <>
            {fruits.length > 0 && <List items={fruits} category="fruits"/> }
            {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/> : null}
        </>
    );
}

export default App
