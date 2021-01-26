
import Home from "./component/home";
import {Switch, Route} from "react-router-dom";
import addSchedule from "./component/addschedules/addschedules"

function App() {
 
  return (
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/addschedule" exact component={addSchedule} />
    </Switch>
  );
}

export default App;
