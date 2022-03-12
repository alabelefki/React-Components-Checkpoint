import {Component} from  "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{border:"solid 1px black",maxWidth:"100vw",textAlign:"center"}}>
        
        <ProfilePhoto />
        <FullName />
        <Address />
        
      </div>
    );
  }
}

export default App;