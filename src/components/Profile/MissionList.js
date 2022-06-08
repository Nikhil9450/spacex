import React from 'react';
import Mission from './Mission';
import classes from "./MissionList.module.css";
function MissionList(props) {

  return (
    <div className={classes.grid}>
      
         {props.missions.map((mission)=>(
             <Mission
             image={mission.image}
             mission_name={mission.mission_name}
             mission_id={mission.mission_id}
             launch_year={mission.launch_year}
             successful_launch={mission.successful_launch}
             successful_land={mission.successful_land}
             details={mission.details}
             />
         ))}
    </div>
  )
}

export default MissionList;
