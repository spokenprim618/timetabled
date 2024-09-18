import './App.css';
import './index.css'
import Calendar from './compenents/Calendar';
const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Chicago</h1>
      <h2>Welcome to Chicago, Natalia! Check out this calendaar to get to know the city and see all the sights during your stay.</h2>
      <Calendar/>
    </div>
  )
}

export default App