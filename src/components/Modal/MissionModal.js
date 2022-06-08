import React from 'react'
import classes from './MissionModal.module.css';
const MissionModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <img src={props.image} alt='mission_logo'></img>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <p>Mission Name -{props.mission_name}</p>
            <p>mission ID -{props.mission_id}</p>
            <p>Launch Year -{props.launch_year}</p>
            <p>
    {
     (props.successful_launch===false) ?'Launch Failed' : 'Launch Successful'
    }
    </p>
            <p className={classes.details}>Mission detail -{props.details}</p>

          <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default MissionModal