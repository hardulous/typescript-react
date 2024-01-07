import Greet from "../Typing Props/1-Greet"

// Here by <typeof Greet> the props of CustomComponent is same as props Greet component so extracting prop type from one component and use it as prop type in other component
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        <h2>CustomComponent</h2>
        {
            props.isLoggedIn ? `Authenticated User ${props.name} Have Message Count Of ${props.messageCount}` : `Free User ${props.name} Have Message Count Of ${props.messageCount}`
        }
    </div>
  )
}

export default CustomComponent

// Here sometime we come across the need to reuse component prop types but if we dont have access to the type itself perhaps because it is from a library that we dont have access to in such cases we can extract prop types of an existing component and use it in other component using "React.ComponentProps<>". 

// Let say this CustomComponent require same prop which is used by the first component <Greet/> which accept 4 props name ,messageCount, isLoggedIn, adminId. Eventhough we can actually export the type of Greet props defined in Greet component and use it here , But let say this Greet component comes from some other library we dont have access to so in this case we will use " React.ComponentProps<typeof Greet> "