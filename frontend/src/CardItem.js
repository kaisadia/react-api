import React from 'react'
import './App.css'
import {useState, useEffect} from 'react'


export default function CardItem(props) {
    const [flipped, setFlipped] = useState(true)
    const [users, setUsers] = useState([]);


const clickHandler = () => {setFlipped(!flipped)}

const fetchAvatar = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
         });
        
  };
  useEffect(() => {
    fetchAvatar();
  }, [])



return (
  <div>
  <div className='card-container' onClick={clickHandler} >
        {flipped &&  (<div className='front'>{users.slice(0, 1).map((users)=> <img className='avatar' key={users.id} src={users.avatar}></img>)} 
        <div> {props.names.first_name} {props.names.last_name}</div> 
        <div className='email'>{props.names.email} </div>
        </div>
        )} 
       
        {!flipped && <p className='back'>More information</p>} 
</div>
</div>
)
}