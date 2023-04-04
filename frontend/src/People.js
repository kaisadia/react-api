 import {useState, useEffect } from 'react'
import CardItem from './CardItem';
import SearchBar from './SearchBar';
import './App.css'


 
 export default function People () {
    const [names, setNames] = useState([])
    const [search, setSearch] = useState('')

    const fetchNames = () => {
      fetch("http://localhost:7000/", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}})
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setNames(data);
             });
            
      };
      useEffect(() => {
        fetchNames();
      }, [])
   

const deleteUser = (x) => {
  fetch(`http://localhost:7000/people/${x}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'}})
    .then((res)=>res.json())
    .then((res)=> console.log(res));
    fetchNames()
}

const filtered = names.filter(value => {
    if(search === ''){
      return value
    } else if (value.first_name.toLowerCase().includes(search.toLowerCase()) || value.last_name.toLowerCase().includes(search.toLowerCase()) ){
      return value}})


      return (
        <div>
          <h2 className='h2'>Search for a user</h2>
        <div className='search'><SearchBar setSearch={setSearch} /></div>
        <div className='grid'>
            {filtered.map((names)=> 
          <div><CardItem names={names} key={names.id}></CardItem>
          <button className='delete_button' type="button" onClick={() => deleteUser(names.id)}> Delete {names.first_name}</button>
          </div>)} 
          </div>
          </div>
    
          
      );
    }
