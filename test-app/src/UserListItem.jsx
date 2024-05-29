import UseUserStatus from "./UseUserStatus";

export default function UserStatus (props){
    const isOnline = UseUserStatus(props.user.id)

     return(
        <li style={{color: isOnline?'green':'black'}}>
            {props.user.name}
        </li>
    )   
}