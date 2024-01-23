import React, { useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
//use state is a hook used to manipulate state when some data is being fetched from a server
function App() {
  const [Contacts,setContacts]=useState([])
const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...Contacts,contact]);
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={Contacts}/>
      {/*The props i.e, property of ContactList*/}
      
    </div>
  );
}

export default App;
