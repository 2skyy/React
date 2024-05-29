
import UseUserStatus from "./UseUserStatus";

export default function UserStatus (props){
    const isOnline = UseUserStatus(props.user.id)

     if(isOnline === null){
         return "대기중..."
     }

     return isOnline? '온라인': '오프라인'
    
}