import React, { useState} from 'react';

function Component(){

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Hanz Joshua');
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const EmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={EmploymentStatus}>Status</button>
        </div>
    )
}

export default Component