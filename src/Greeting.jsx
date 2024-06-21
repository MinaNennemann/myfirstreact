import "./App.css";

const Greeting = (props) => {
  return(
  <div>
  <h1 className="text">Hello {props.name}!</h1>
  <h1 className="">I live in {props.city}. </h1>
  <h1>My favourite club is {props.club}.</h1>
  <h1>My favorite color is {props.color}.</h1>
  <h1>My favorite animal is {props.animal}.</h1>

  </div>
);
};



export default Greeting;
