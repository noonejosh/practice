import profile from '/public/Hanz.jpg';

function Card(){

    return(
        <div className="card">
            <img className='card-img' src={profile} alt="profile" />
            <h2 className='card-title'>Hanz Joshua</h2>
            <p className='card-detail'>A Developer</p>
        </div>
    );
}

export default Card;