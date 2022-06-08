import classes from './StartingPageContent.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const StartingPageContent = () => {
  const authCtx=useContext(AuthContext);
  const isLoggedIn=authCtx.isLoggedIn;
  return (
    <section className={classes.starting}>
      
      {isLoggedIn &&(
          <div>
        <p className={classes.firstp}>Yay! Now you can see the Missions by clicking on the Spacex Missions </p>
        </div>
      )}
      {!isLoggedIn && (
          <div>
        <h1>Welcome</h1>
        <p>Login to see the missions of Spacex.</p> 
        </div>
      )}
    
    </section>
  );
};

export default StartingPageContent;
