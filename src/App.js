import logo from './logo.svg';
import './App.css';

let name = "Vishu" ;
function App() {   //function based component  
  return (  // we can return only one element *********
    // this is JSX 
    //class is reserved keyword so class --> className
    //for -->> htmlFor 
    //tab--> tabIndex 
      
    //JSX fragments   we need to return only one tag so wrap it into one tag
    
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav><div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos vero modi consequuntur. Soluta neque exercitationem magnam possimus at a quo? Eaque aliquid necessitatibus aut sint nulla eveniet, optio voluptatibus!</p>
    </div>



    </>
  );
}

export default App;
