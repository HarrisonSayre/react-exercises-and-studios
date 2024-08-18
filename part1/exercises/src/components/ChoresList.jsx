import classes from './ChoresList.module.css';


export default function ChoresList () {
   return( 
      <div> 
         <h1 className = {classes.choresHeading}>Chores</h1> 
         <ui>
            <li className={classes.choresText}>Exercise 1</li>
            <li className={classes.choresText}>Demo</li>
            <li className={classes.choresText}>Studio</li>
         </ui>
      </div>
   );
}