import React, { useEffect, useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(0);
  // document.title = `총 ${count}번 클릭했습니다.`;

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  function handleStatusChange(status) {
    setIsOnline(status.setIsOnline);
  }

  useEffect(() => {
    serverAPI.subscribeUserStatus(props / user.id, handleStatusChange);
    return () => {
      serverAPI.subscribeUserStatus(props / user.id, handleStatusChange);
    };
  });
  if (isOnline == null) {
    return `대기 중...`;
  }
  return isOnline ? "온라인" : "오프라인";
}
