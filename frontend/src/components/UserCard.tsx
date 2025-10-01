//import "./UserCard.css"

function UserCard(props: {name: string; email: string}) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
)}

export default UserCard;