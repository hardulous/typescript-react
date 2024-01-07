import { useContext } from "react"
import { UserContext } from "./5-UserContext"

const UserCompo = () => {

  const userContext = useContext(UserContext)

  const handleLogin = ()=>{
    if(userContext){
      userContext.setUser({
        name: "Doe Jane",
        email: "Doe@gmail.com"
      })
    }
  } 
  const handleLogout = ()=>{
     if(userContext){
      userContext.setUser(null)
     }
  } 

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <div>User Name Is {userContext?.user?.name}</div>
        <div>User Email Is {userContext?.user?.email}</div>
    </div>
  )
}

export default UserCompo

// Handling case of context with future value 

// Here right now we are performing optional chaining check for email or name property as userContext can be null as well so to avoid this if we are confident that user will always be initlized to some value and will never be null again so in this case we will use "TYPE ASSERTION"