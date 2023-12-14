import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props) {
  // code here
  let imgg = props.imageData();

  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className='body'>
        {imgg.map((ob) => {
          return (
            <img src={ob.img} alt='elephant' />
          )
        })}
      </div>
    </div>
  )
}

export default App;
