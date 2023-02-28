import "./login.css"
import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <div id="E">
      <div class="row" id="A"></div>
      <div class="row" id="B">
        <div class="col-sm-1"></div>
        <div class="col-sm-5" id="C"> <h1>facebook</h1></div>
        <div id="fellow"> <p id="dell">Facebook helps you connect and share <br/>with the people in your life.</p></div>
        <div>
          <form >
            <center>
            <input placeholder="Email address or phone number" className="email"></input>
            <input placeholder="Password" className="email"></input><br/><br/>
            <button>login</button><br/><br/>
             <Link to='/Register'>Forgetten password?</Link> 
            <Link to={'/Register'}>click</Link>
            {/* <a href="">Forgetten password?</a> */}
            <hr></hr>
            <button id="gen">Create New Account</button>
            </center>
          </form>
        </div>
        <div class="col-sm-1"></div>
        
      </div>
      <div class="row" id="D"></div>
  
      </div>

  )
}
