import logo from './logo.svg';
import './App.css';
import File1 from './components/File1';
import File2 from './components/File2';
import Articles from './components/Articles';


function App() {
  return (
   <>
    <File2 home="Home" about="About" services="Services" contact="Contact"/>
  

  
 <Articles/>
 <File1 fillForm="Fill Form" name="Name" email="Email" password="Password" gender="Gender"/>
 

   </>
  );
}

export default App;
