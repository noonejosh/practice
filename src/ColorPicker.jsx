import React, { useState } from 'react';


function ColorPicker(){
    const [color, setColor] = useState('#000000');

    function handleColorChange(e) {
        setColor(e.target.value);
    }
    return(
        <div className='color-picker'>
            <h1 className='tile'>Color Picker</h1>
            <div className='color-input' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color</label>
            <input type='color' value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker