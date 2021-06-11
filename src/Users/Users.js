import React from 'react'
import '../Users/Users.css'
import {Link} from 'react-router-dom'
const Users = ({el}) => {
    return (
        <div>
            
<main class="page-content">
  <div class="card" style={{backgroundImage: `url("https://dgcspayroll.com/static/img/anonymous-user.png")`, width:"330px" , backgroundSize: 'cover',  backgroundRepeat: 'no-repeat',height: '100%' }} >
    <div class="content">
      <h2 class="title">{el.name}</h2>
      <p class="copy">{el.username}</p>
      <p class="copy">{el.email}</p>
      <p class="copy">{el.id}</p>
     <Link  to={`/UserDetails/${el.name}`}><button class="btnn" >View more</button></Link> 
    </div>
  </div>
 

</main>
        </div>
    )
}

export default Users
