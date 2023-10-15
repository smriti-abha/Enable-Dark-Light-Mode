import './Articles.css';
import React ,{useState} from 'react';
function Articles(){

   
    const [style, setMyStyle]=useState({
       backgroundColor:'white',
       color:'black'

    })

    const [btn , btnStyle]=useState("Enable dark Mode")

    const toggleStyle = () =>{
        if(style.color=='white'){
            setMyStyle({
                backgroundColor:'white',
                color:'black' 
            })
            btnStyle("Enable Dark Mode");
        }else{
            setMyStyle({
                backgroundColor:'black',
                color:'white' 
            })
            btnStyle("Enable Light Mode");
        }
    }

    return(
        <div style={style}> 
            <h3>Write and Submit an Article</h3>
            <div id='container'>
            <div className="article-form" style={style}>
        <form action="submit_article.php">
            <label for="title">Article Title:</label>
            <input type="text" id="title" name="title" required/>

            <label for="category">Category:</label>
            <select id="category" name="category">
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="other">Other</option>
            </select>

            <label for="content">Article Content:</label>
            <textarea id="content" name="content" required></textarea>

            <label for="image">Upload an Image:</label>
            <input type="file" id="image" name="image" accept="image/*" />

            <input type="submit" value="Submit Article"/>
            
        </form>
    </div>
    <div class="container">
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          <button className='uppercase' type='button' onClick={toggleStyle}>{btn}</button>
          </div>
          </div>
        </div>
    )

}
export default Articles;