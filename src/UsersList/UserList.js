import React from 'react'
import Users from '../Users/Users'
const UserList = ({users}) => {
    return (
        <div style={{display:'flex', flexWrap: 'wrap'}}> 
              { users.map((el,i) => <Users el={el} key={i} />)}
         </div>
    )
}

export default UserList
