
function ProfilePic(){

    const imageUrl = './src/assets/Hanz.jpg';

    const handleClick = (e) => {
        e.target.style.display = 'none';
    }

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} />
    );
}

export default ProfilePic