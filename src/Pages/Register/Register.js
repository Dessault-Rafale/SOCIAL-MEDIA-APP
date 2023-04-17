import React from 'react'
export default function Register() {
    return (
        <div>
            <div style={{ backgroundColor: "rgb(211, 86, 8)", height: "550px", width: "700px", marginLeft: "400px", marginTop: "100px", border: "5px solid black" }}>

                <form>
                    <center>
                        <br></br>
                        <h2 style={{textDecoration: "underline"}}>REGISTRATION FORM</h2><br></br> <br></br>
                        <label style={{ marginLeft: "-50px" }}>Name:</label>
                        <input type="text" name="name" required placeholder="Enter the Name" style={{ height: "30px", width: "300px" }} /><br></br> <br></br>
                        <label style={{ marginLeft: "-25px" }}>Email:</label>
                        <input type="text" name="email" required placeholder="Enter the Email" style={{ height: "30px", width: "300px" }} /><br></br> <br></br>
                        <label style={{ marginLeft: "-60px" }}>Place:</label>
                        <input type="text" name="place" required placeholder="Enter the Place" style={{ height: "30px", width: "300px" }} /> <br></br> <br></br>
                        <label style={{ marginLeft: "-60px" }}>Address:</label>
                        <input type="text" name="address" required placeholder="Enter the Address" style={{ height: "30px", width: "300px" }} /> <br></br> <br></br>
                        <label style={{ marginLeft: "-60px" }}>Phone:</label>
                        <input type="number" name="phone" required placeholder="Enter the Phone" style={{ height: "30px", width: "300px" }} /> <br></br> <br></br>
                        <label style={{ marginLeft: "-60px" }}>Username:</label>
                        <input type="text" name="username" required placeholder="Enter the Username" style={{ height: "30px", width: "300px" }} /> <br></br> <br></br>
                        <label style={{ marginLeft: "-60px" }}>Password:</label>
                        <input type="text" name="password" required placeholder="Enter the Password" style={{ height: "30px", width: "300px" }} /> <br></br> <br></br>
                        <input type="submit" value="SUBMIT" style={{ backgroundColor: "rgb(149, 3, 110)", height: "30px", width: "100px", marginTop: "15px" }} />
                    </center>
                </form>




            </div>

        </div>
    )
}
