import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Drop() {

  return (
    <div>
      <DropdownButton  title="Check out your Fav Restasurants">
        
     
        {/* <Link to='/burgerking'>  <Dropdown.Item as="button">Burger King</Dropdown.Item></Link>
        <Link to='/mcd'>  <Dropdown.Item as="button">Mc donals</Dropdown.Item></Link>
        <Link to='/pizzahut'><Dropdown.Item as="button">Pizza Hut</Dropdown.Item></Link>
        // <Link to='/pizzahood'>  <Dropdown.Item as="button">Pizza Hood</Dropdown.Item></Link>*/}
        <Link to='/app'><Dropdown.Item as="button">Dominos</Dropdown.Item></Link> 
      </DropdownButton>
    </div>
  )
}
