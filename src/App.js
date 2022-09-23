
import Router from "../src/router"
import {UserProvider} from "./Context/UserContext"


function App() {
  return (
    <UserProvider>   
    <div >
    <Router/>
    </div>
    </UserProvider>
  );
}

export default App;
