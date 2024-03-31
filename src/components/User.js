import ChildUser from "./ChildUser";

function User (props) {
    return(
        <>
        {/* <h1>This is User Component {props.user}....</h1> */}
        <ChildUser user={props.user} />
        </>
    );
}

export default User;