import {useState, useEffect } from 'react'

 export default function Avatar (props) {
    const [users, setUsers] = useState([]);

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
        {users.slice(0, props.names.length).map((users)=> 
      <img className='avatar' key={users.id}  src={users.avatar}>
      </img>)} 
      </div>
  );
}
