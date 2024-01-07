import { useState } from "react"


const IsLoggedIn = () => {

  // Here based on type inference as initial value is false so type of isLoggedIn is boolean and only boolean value can be stored inside it but the setter function setIsLoggedIn has very compilcated type React.Dispatch<React.SetStateAction<boolean>>
  const [isLoggedIn, setIsLoggedIn] = useState(false)  

  const handleLogIn = ()=>{
    // console.log(isLoggedIn.length)  // Here as isLoggedIn is of type boolean so it does not have .length property but in js no error will come but code will crash at runtime
    setIsLoggedIn(true)
  }
  const handleLogOut = ()=>{
    // setIsLoggedIn(0)   // Here even if 0 in js evaluate to false still ts will not allow me to assin 0 to isLoggedIn of type boolean 
    setIsLoggedIn(false)
  }
    
  return (
    <div>
       <button onClick={handleLogIn}>Log In</button>
       <button onClick={handleLogOut}>Log Out</button>
       <div>The User Is {isLoggedIn ? 'Logged In' : 'Logged Out'} </div>
    </div>
  )
}

export default IsLoggedIn

// Here let say we have component in which based on whether user logged in or not render different jsx , since we have data that can change we will use state variable. 

// Here in order to know the type of setter function of useState() just hover over the setter function and copy paste the type from it and no need to memorize the type.

// Here most of the time we do not explicitly type the useState() as type inference will do it for us but for more complex type and if we do not know the value of state variable initially but can have a value in future for this we have to give type to useState()