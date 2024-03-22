import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "Quick Dinners", 
         value: "Quick Dinners"
      },
      {
         label: "Game Day Foods",
         value: "Game Day Foods"
      },
      {
         label: "Asian Fusion",
         value: "Asian Fusion"
      }
   ];

   const boardOptions = boards.map((option) => (
      <option key={option.value} value={option.value}>{option.label}</option>
   )); 

   const handleChange = (event) => {
      setName(event.target.value);
   }

   const [boardName, setName] = useState("no boards yet!"); 

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value="Select board">*Select board*</option>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
