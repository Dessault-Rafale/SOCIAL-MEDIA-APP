import "./register.css"
export default function Login() {
    return (
        <div id="E">
            <div class="row" id="A"></div>
            <div class="row" id="B">
                <div class="col-sm-1"></div>
                <div class="col-sm-5" id="C"> <h1>facebook</h1></div>
                <div id="fell"> <p id="dell">Facebook helps you connect and share <br />with the people in your life.</p></div>
                <div class="col-sm-5" id="box">
                    <form >
                        <center>
                            <label for="">First Name :</label>
                            <input  placeholder="First Name" type="text"></input><br />
                            <label for="">Last Name :</label>
                            <input placeholder="Last Name" type="text"></input><br />
                            <label id="son" for="">D.O.B :</label>
                            <input type="date"></input><br/><br/>
                            <label for="">Gender :</label>
                            <label for="">Male</label>
                            <input id="do" type="radio"/>
                                <label for="">Female</label>
                                <input id="do" type="radio"></input><br></br>
                                    <input id="hello" placeholder="Email address or phone number"></input>
                                    <input  id="hello" placeholder="Password"></input><br /><br />
                                    <button>login</button><br /><br />
                                    <a href="">Forgetten password?</a>
                                    <hr></hr>
                                    <button id="gen">Create New Account </button>
                                </center>
                                </form>
                            </div>
                            <div class="col-sm-1"></div>

                        </div>
                        <div class="row" id="D"></div>

                </div>

                )
}
