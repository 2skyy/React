import {useState, useEffect} from "react";

export default function UseUserStatus (userId){
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
   return isOnline
}