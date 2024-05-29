import {useState, useEffect} from "react";

export default function useEffect(props){
    const[isOnline, setIsOnline]=useState(null)

    useEffect(()=>{
        function HandleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        ServerAPI.subscribeUserStatus(props.user.id, HandleStatusChange)
        return()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id, HandleStatusChange)
        }
        
     
    })
    // if(isOnline===null){
    //     return "대기중..."
    // }
    // return isOnline? '온라인': '오프라인'
    return(
        <li style={{color: isOnline?'green':'black'}}>
            {props.user.name}
        </li>
    )
    
}