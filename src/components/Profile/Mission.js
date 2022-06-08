import { useState } from 'react';
import MissionModal from '../Modal/MissionModal';
import classes from './Mission.module.css';

const Mission = (props) => {
  const [details, setDetails]=useState(false);

  const modalHandler=()=>{
    setDetails(true);
  }
  const toggleHandller=()=>{
    setDetails(false);
  }
  return (
   
  <div>
     {details && (
      <MissionModal 
      mission_name={props.mission_name}
      image={props.image} 
      launch_year={props.launch_year} 
      landing={props.successful_land} 
      details={props.details} 
      mission_id={props.mission_id}
      successful_launch={props.successful_launch}
      onConfirm={toggleHandller}/>
    )}
  <div className={classes.container}>
  <div className='img'>
  <img src={props.image} alt=""></img>
  </div>
  <div className='content'>
  <h3>{props.mission_name}</h3>
     <h4>Mission Id : <span className={classes.data}>{props.mission_id}</span></h4>
     <h4>Launch year : <span className={classes.data}>{props.launch_year}</span></h4>
     <h4>
    {
     (props.successful_launch===false) ?'Launch Failed' : 'Launch Successful'
    }
    </h4>
     <h4>{props.successful_land}</h4>
     <button  classname={classes.but} onClick={modalHandler}>More details</button>
  </div>
    </div>
  </div>
  );
}

export default Mission;
