import { useState, useEffect } from "react";

export default function UserStatus(props) {
  const { isonline, setOnline } = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setOnline(status.isonline);
    }

    ServerAPI.subscribeUser(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUser(props.user.id, handleStatusChange);
    };
  });
  return (
    <li style={{ color: isonline ? "green" : "black" }}>{props.user.name}</li>
  );
}
