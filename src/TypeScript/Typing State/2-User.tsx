import { useState } from "react"

type AuthUser= {
    name: string
    email: string
}

const User = () => {

  // Here by generic useState<null | AuthUser>. The user state variable type is union of both null or AuthUser that is it can be either of one type   
  const [user, setUser] = useState<null | AuthUser>(null)
  
  const handleLoggedOut = ()=>{
    setUser(null)       // As user can be null as well
  }
  const handleLoggedIn = ()=>{
    setUser({                       // As user can be object of type AuthUser as well
        name: "Aman Bisht",
        email: "aman@gmail.com"
    })
  }

  return (
    <div>

        <button onClick={handleLoggedIn}>Log In</button>
        <button onClick={handleLoggedOut}>Log Out</button>

        {/* Here as user state variable can be null as well so to avoid runtime error ts automatically add ? optional chaining when accessing property of AuthType user */}
        <div>The Future User Is {user?.name} And His Email Is {user?.email}</div>

    </div>
  )
}

export default User


// Here now we have component in which type of state variable is known at some point of time in future so to handle this case we will use "UNION" as type in state variable. Here in this component initially user state is null but once user is logged in then type of user state wil be AuthUser that is the type is known at some point of time in future. 

// To provide state variable type as UNION we use generic "useState<type 1 | type 2 | type 3 ...so on>(initial value)"