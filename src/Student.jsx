

function Student({name = "Guest", age = 0, isStudent = false}) {

    return (
        <div className="student">
            <h1>Student Component</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isStudent: {isStudent ? "Yes" : "No"} </p>
        </div>
    );
}

export default Student;