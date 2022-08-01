import React from "react";
import "./Card.css";

const UserCard = ({ user }) => {
   return (
    <div className="top">
      <div class="card__flip" ontouchstart="this.classList.toggle('hover');">
  <div class="card__container">
    <div class="card card--front">
    <img src="https://cdn-icons-png.flaticon.com/512/126/126327.png" alt="" />
      <h1>{user.username}</h1>
    </div>
    <div class="card card--back">
      <dl>
        <dt style={{color:'tomato'}}>Name</dt>
        <dd>{user.name}</dd>
        <dt style={{color:'tomato'}}>Nbr Phone</dt>
        <dd>{user.phone}</dd>
        <dt style={{color:'tomato'}}>Email</dt>
        <dd>{user.email}</dd>
        <dt style={{color:'tomato'}}>Web Site</dt>
        <dd>www.{user.website}</dd>
        <dt style={{color:'tomato'}}>Adresse</dt>
        <dd>{user.address.street}  {user.address.suite}</dd>   
        <dd>{user.address.zipcode} {user.address.city}</dd>
        <dt style={{color:'tomato'}}>Company</dt>
        <dd>{user.company.name}</dd>
        <dd>{user.company.catchPhrase}</dd>
        <dd>{user.company.bs}</dd>
      </dl>
    </div> 
  </div>
</div>
    </div>
    
  );
};

export default UserCard;
