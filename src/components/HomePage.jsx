import React from 'react';
import { Link, Navigate} from "react-router-dom";
import {ContactList , ContactPage , Button} from "./";
import './style.css';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {

  const navigate  = useNavigate();
  function submit (){
    navigate('/ContactPage');
  }

  function submit1 (){
    navigate('/ContactList');
  }

  return (
    <div className='container'>
        
      <div className="homepage">
        
        <h1>
            HomePage
        </h1>

        
        <div className='container-btn'>
        {/* <div>
          <Link to={`/ContactPage`}>

            <button className='btn'>  Add Contact </button>

          </Link>
        </div> */}

        <div>
          <Button text="contact" onClick={submit} ></Button>
          <Button text="Add Contact" onClick={submit1}></Button>
        </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default HomePage
