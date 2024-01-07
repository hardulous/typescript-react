import Login from "./1-Login"
import { ProfileProps } from "./2-Profile"

// Here type for Private component which accept 2 props isLoggedIn of type boolean and component which is of type react component

// type PrivateProps1 = {
//     isLoggedIn: boolean
//     component: React.ComponentType   // Here type is react component which does not accept any props
// }

type PrivateProps2 = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>   // Here type is react component which do accept props of type ProfileProps 
}

const Private = ({isLoggedIn , component: Component} : PrivateProps2) => {
  
    if(isLoggedIn){
        return <Component name="AMAN SINGH BISHT"/>
    }
    else{
        return <Login/>
    }

}

export default Private

// Here we have Login , Profile and Private component , The role of private component is to control whether user will view the <Login/> or <component/> props based on props isLoggedIn passed to it. 

// Here we are passing isLoggedIn which is of type boolean and component prop which is a react component so its type can be either "React.ComponentType" or "React.ReactNode" but more specifically since we are accepting component as a props so use "React.ComponentType" as a type. 

// 

// @@@@@ NOTE :: Difference btwn React.ComponentType and React.ReactNode 

/*

1. React.ComponentType => It is specifically designed to represent a React component type can be both class or function based component. It can be used when you want to specify that a certain prop is expected to be a React component. If you specifically want to accept either a functional component or a class component as a prop, you can use either "React.FC (Functional Component)" and "React.ComponentClass (Class Component)".

2. React.ReactNode => It is a more general type that includes all possible types that can be rendered in a React application. It can represent not only components but also primitive types (like strings, numbers), fragments, arrays, etc

In summary, use React.ComponentType when you specifically want to accept a React component type as a prop, and use React.ReactNode when you want to accept a broader range of React nodes, including components, primitives, or even arrays of nodes.


*/