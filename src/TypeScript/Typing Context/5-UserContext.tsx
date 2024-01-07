import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: null | AuthUser
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// Here again for mentioning "UNION" of type for context we will use generic syntax "<type 1 | type 2 | ....so on>""
export const UserContext = createContext<null | UserContextType>(null)

// export const UserContext = createContext({} as UserContextType)  // Here by type assertion we are lying to ts to consider this empty object of type UserContextType so we dont need to perform optional chaining checks

export const UserProvider = ({children}: UserProviderProps)=>{
    
    // Here state for managing login or logout by user , As user can be null in logout and AuthUser type in login so we will use "UNION" in this case 
    const [user, setUser] = useState<null | AuthUser>(null)

    // Now my userContext can pass either value null or UserContext type
    return <UserContext.Provider value={{user , setUser}}>{children}</UserContext.Provider>

}


// Here now we have a case in which we have user whose value we dont know but will be initlized after some point in time in future so in this case again either we can use "UNION" with null or we can use "TYPE ASSERTION" if we are confident that user will always have some value in future and will never be null again

// Here but initiall our UserContext context is of type null but the value it need to pass can be both null or AuthUser type and also a setter function , so in this case we also need to pass "Union" of null or AuthUser as a type and setter function type to UserContext

