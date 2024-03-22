import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("");
   const [recipeStatus, setStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value); 
   }

   const handleSubmit = (event) => {
      let status = document.getElementById("status");
      status.innerHTML = "You have tried this recipe!";
      setStatus(true); 
      event.preventDefault();
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes}</p>

         <p id="status">I have not tried this recipe!</p>
      </div>
   );
}
