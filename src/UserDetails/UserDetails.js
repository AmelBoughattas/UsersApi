import React from 'react'
import '../UserDetails/UserDetails.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const UserDetails = (props) => {

    const userFound = props.users.find((a) => a.name == props.match.params.user);

    return (
        <div>
            <div id="container">

                <div class="product-details">
                    <h1>{userFound.name}</h1>
                    <h4>Address :</h4>
                    <p class="information">Street:" {userFound.address.street}" </p>
                    <p class="information">Suite:" {userFound.address.suite}" - City: {userFound.address.city}</p>
                    <p class="information">Zipcode:" {userFound.address.zipcode}"</p>
                    <p class="information">Lat:" {userFound.address.geo.lat}" - Lng: {userFound.address.geo.lng}</p>
                </div>
                <div class="product-image">
                    <img src="https://dgcspayroll.com/static/img/anonymous-user.png" alt="Omar Dsoky" />

                    <div class="info">
                        <h2>Contact</h2>
                        <ul>
                            <li><strong>Phone: </strong>{userFound.phone}</li>
                            <li><strong>Website: </strong> {userFound.website} </li>
                            <li><strong>Company: </strong> {userFound.company.name} <br/>
                                                  {userFound.company.catchPhrase}<br/>
                                                  {userFound.company.bs}
                            </li>
                          
                        </ul>
                    </div>
                </div>


            </div>

            <Link to='/'>   
            <Button className="btnHome" variant="secondary" style={{ marginLeft: '45%' }}>Home</Button> 
             </Link> 
        

           

        </div>
    )
}

export default UserDetails
