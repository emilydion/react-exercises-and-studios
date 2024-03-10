import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <>
         <h2 className={classes.choresHeading}>Chores</h2>
         <p className={classes.choresText}>Do LaunchCode Homework</p>
         <p className={classes.choresText}>Clean room</p>
         <p className={classes.choresText}>Take out trash</p>
      </>
   );
}