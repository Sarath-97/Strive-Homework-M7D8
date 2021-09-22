
import {Container} from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components/MyNavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
     <Container>
     <SearchBar />
     </Container>
        
    </div>
  );
}

export default App;
