import Childuser from "./Childuser";

function User ({ user, chuser}) {
    console.log(user);
    return (
        <div className="web">
            <h1>User - {user}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quasi nemo harum nostrum officiis culpa exercitationem sit nobis aut voluptates?</p>
            <button>Read More</button>

            <Childuser chuser={chuser} />
        </div>
    )
}

export default User;