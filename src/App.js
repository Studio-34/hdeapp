import './App.css';
import Pitch from './Comps/Pitch';
import Keys from './Comps/Keys';
import Card from './Comps/Card';
import Header from './Comps/Header';

function App() {
  return (
    <div className="App container">
      <Header />
      <Pitch />
      <Keys />
      <h1 className="text-center mt-5">Pricing</h1>
      <div className="row row-cols-1 row-cols-md-3 mt-5 mb-3 text-center">
        <div className="col">
          <Card cardTitle="Free"
            cardText="This subscription level is designed to give the users the opportunity to test the functionality and features of the app without any payment obligations. A standard footer graphic is provided."
            signUp="Sign Up"
            price="$0"
          />
        </div>
        <div className="col">
          <Card cardTitle="Premium"
            cardText="This subscription level is designed to give the users the opportunity to test the functionality and features of the app without any payment obligations. A standard footer graphic is provided."
            signUp="Sign Up"
            price="$4.99"
          />
        </div>
        <div className="col">
          <Card cardTitle="Enterprise"
            cardText="This subscription level is designed to give the users the opportunity to test the functionality and features of the app without any payment obligations. A standard footer graphic is provided."
            signUp="Sign Up"
            price="$59.99"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
