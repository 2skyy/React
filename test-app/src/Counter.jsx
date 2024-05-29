import React, { useEffect, useState } from "react";


export default function Counter(props) {

    const [count, setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(null);
    
    useEffect(()=>{
          document.title = `총 ${count}번 클릭했습니다.`;
    })


    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline == null) {
        return '대기중...';
    }

    return isOnline ? '온라인' : '오프라인';
}
