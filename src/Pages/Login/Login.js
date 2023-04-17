import React from 'react'
export default function Login() {
  return (
    <div>
      <div style={{backgroundColor: "rgb(8, 197, 211)", height: "300px", width: "700px", marginLeft: "400px", marginTop: "100px", border: "5px solid black"}}>

        <form>
          <center>
            <br></br>
            <h2 style={{textDecoration: "underline", marginLeft:"-23px"}}>LOGIN </h2> <br></br> <br></br>
            <label style={{marginLeft:"-60px"}}>Username:</label>
            <input type="text" name="Book" placeholder="Enter the Username" required style={{height: "30px", width: "300px", marginTop:"0px"}} /> <br></br> <br></br>
            <label style={{marginLeft:"-60px"}}>Password:</label>
            <input type="text" name="text" placeholder="Enter the Password" required style={{height: "30px", width: "300px", marginTop:"0px"}} /> <br></br> <br></br>
            <input type="submit" value="LOGIN" style={{ backgroundColor: "rgb(149, 3, 110)", height: "30px", width: "100px", marginTop: "20px"}} />
          </center>
        </form>




      </div>

    </div>

  )
}
