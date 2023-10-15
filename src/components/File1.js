import { eventWrapper } from '@testing-library/user-event/dist/utils';
import './File1.css';
import React,{useState} from 'react';


function File1(props){
    const [text,setText]=useState('Enter text here');
    const handleOnClick = (props) =>{
      console.log("Write in Uppercase Only");
      if(text.toUpperCase(props.name)){
        setText(props.name);
      }
        else
        setText("ENTER TEXT IN UPPERCASE ONLY");
      }
    

    const handleOnChange = (event) =>{
     
      
        setText(event.target.value);
       
    }
  
    
   return(
      <>
        <h1>{props.fillForm}</h1>
       <div className='allBlock'>
     
        <form action="submit.php">
    
    <label id="name">{props.name}:</label>
    <input type="text" value={text} id="name" name="name"  onChange={handleOnChange}/>

    <label id="email">{props.email}</label>
    <input type="email" id="email" value={text} onChange={handleOnChange} name="email" required/>
    
    <label id="password">{props.password}:</label>
    <input type="password" id="password" onChange={handleOnChange} name="password" required/>

    <label>{props.gender}</label>
    <input type="radio" id="male" name="gender" onClick={handleOnClick} value="male"/>
    <label id="male">Male</label>
    <input type="radio" id="female" name="gender" onClick={handleOnClick} value="female"/>
    <label id="female">Female</label>

    <label>Hobbies:</label>
    <input type="checkbox" id="reading" name="hobbies[]" onClick={handleOnClick} value="reading"/>
    <label id="reading">Reading</label>
    <input type="checkbox" id="traveling" name="hobbies[]" onClick={handleOnClick} value="traveling"/>
    <label id="traveling">Traveling</label>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa" onClick={handleOnClick}>United States</option>
        <option value="canada" onClick={handleOnClick}>Canada</option>
        <option value="uk" onClick={handleOnClick}>United Kingdom</option>
    </select>

    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
    
    <input type="submit"  onClick={handleOnClick} value="Submit"/>
    </form>
        </div>
      </>


    )

}
export default File1;