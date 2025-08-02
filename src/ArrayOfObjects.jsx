import React, {useState} from 'react';

function ArrayOfObjects() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [make, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        const newCar = {year: carYear, carMake: make, model: carModel};
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index))
    }

    function handleYearChange(e){
        setCarYear(e.target.value)
    }

    function handleMakeChange(e){
        setCarMake(e.target.value)
    }

    function handleModelChange(e){
        setCarModel(e.target.value)
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,i) => 
                    <li key={i} onDoubleClick={() => handleRemoveCar(i)}>
                        {car.year} {car.carMake} {car.model}
                    </li>
                )}
            </ul>

            <input type='number' value={carYear} onChange={handleYearChange}/><br />
            <input type='text' value={make} onChange={handleMakeChange} /><br />
            <input type='text' value={carModel} onChange={handleModelChange}/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default ArrayOfObjects