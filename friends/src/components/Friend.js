import React from "react";
import "./FriendsList.scss";


function Friend(props) {
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <button onClick={(e) => props.delete(e, props.friend.id)}>DELETE</button>
        </div>
    )
}

export default Friend;