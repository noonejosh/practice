

function Button(){
    //using onClick event
    // let count = 0;

    // const handleClick = () => {
    //     alert("Button clicked!");
    // }

    // const handleClickWithParams = (name) => {
    //     if(count < 4){
    //         count++;
    //         alert(`Hello ${name}, you have clicked the button ${count} times!`);
    //     }
    //     else{
    //         alert(`Hi ${name} have reached the maximum number of clicks!`);
    //     }
    // }

    const handleClick = (event) => event.target.textContent = 'OUCH!';
    return(
        <>
            <button className="btn" onClick={ () => handleClickWithParams('Hanz Joshua')}>
            Click Me
            </button>
            {/* <button className="btn" onClick={handleClick}>
                Click Me Again
            </button> */}
            <button className="btn" onClick={(e) => handleClick(e)}>
                Click Me Again
            </button>
        </>
    )

}

export default Button;