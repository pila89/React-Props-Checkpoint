import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
//1 declare the data


function App() {
  return (
    <div className="App">
      <Profile fullName="Salim Amara" bio="Developer" profession="Student in GO MY CODE">
        <img src="salim amara.jpg" alt="John" style={{  
            borderRadius: 400/ 2,
            width: 200}} src="salim amara.jpg" />
      </Profile>
    </div>
    //2 paass the data
  );
  
}

export default App;
