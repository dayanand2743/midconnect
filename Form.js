import React from "react";

function Form() {
  return (
    <div class = "box">
        <form>
            <h2>LOGIN</h2>
            <div class="inputbox">
                <input type ="text" required="required" />
                <span>Usename</span>
                <i></i>
                
            </div>
            <div class="inputbox">
                <input type ="password" required="required" />
                <span>Password</span>
                <i></i>
            
            </div>
            <div class="links">
                <a href ="#">Forgot Password</a>
                <a href ="#">Sign up</a>
            </div>
            <input type ="submit" value ="login" />
        </form>

     </div>
  );
}

export default Form;