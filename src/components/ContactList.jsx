import React from 'react'
import './style.css';

const ContactList = () => {
  const name = "Tejas"
  const sname = "Raut" 
  const number = 985094157171
  return (
               <div className='container'>
        
    <div className="homepage">
      
      <h2>
          ContactList
      </h2>
         

         <div className='todo-container'>
          <ul className='todo-list'>
            <div className='todo'>

              
                  {/* <li className='todo-item'> */}
        
                  
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  <li>{name} {sname} {number}</li>
                  
                  
                  {/* </li> */}
            </div>

            
          </ul>

         </div>
      
    </div>


 </div>
  )
}

export default ContactList
