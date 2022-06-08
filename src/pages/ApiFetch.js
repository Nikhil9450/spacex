import {useState, useEffect} from 'react';
import MissionList from '../components/Profile/MissionList';
import classes from './ApiFetch.module.css';


const ApiFetch = () => {
  const[mission,setMission]=useState([]);
  const[isLoading, setIsLoading]=useState(false)
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://api.spacexdata.com/v3/launches')
    .then(respose=>{
      setIsLoading(false);
      return respose.json();
    })
    .then(result=>{
      const transformedData = result.map(missionData =>{
        return{
          image:missionData.links.mission_patch,
          mission_name:missionData.mission_name,
          mission_id:missionData.mission_id,
          launch_year:missionData.launch_year,
          successful_launch:missionData.launch_success,
          details:missionData.details
        };
      });
      setMission(transformedData);
    });
  },[])
  console.log(mission);
  
  
    return (
      <div  className={classes.container}>
        {isLoading && (
          <p className={classes.loading}>Loading...</p>
        )}
        {!isLoading && (
         <MissionList missions={mission} />
        )}
      
      </div>
    );
  }
    
  

export default ApiFetch;
