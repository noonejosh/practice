

function UserGreeting({ isLoggedIn, username }) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginMessage = <h2 className="login-prompt">Please log in</h2>
    return(
        isLoggedIn ? welcomeMessage : loginMessage                     
    );
}

export default UserGreeting;