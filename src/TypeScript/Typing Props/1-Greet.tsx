type greetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
  adminId?: string     // Optional property may or may not exist in props
};

const Greet = (props: greetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <span>
          Hello {props.name} ! You Have {props.messageCount} Unread Messages. I am {props.adminId?.toUpperCase() ? 'Admin User' : 'Free User'}
        </span>
      ) : (
        <span>Hello Guest ! You Have {props.messageCount} Unread Messages</span>
      )}
    </div>
  );
};

export default Greet;

// Here let say we have this Greet component which will accept props from parent component "name" and will show in its JSX. But as soon as i accept parameter props the ts throws an error that "props as type any" which means props can accept any type of data type but in ts in order to accept props we need to define its type as an object. So we will use "type" keyword to create that type. Now it has 2 benifit ::

// first one is i now get autosuggestion of possible properties props contain so dont have to spend time debugging about what values props contain , The second one is when i invoke this component and passed name data type as anything other than string then ts will throw error as name must contain string and if it is not ts then in js no such error will comes and our code will definetly breaks at runtime or production. So ts will help us catch potential errors at compile time.

// Now let say we will accept 2 more props messageCount and isLoggedIn as props , As soon as i modify type greetProps now wherever i invoke this Greet component will get error as now i have to provide messageCount and isLoggedIn as props to this Greet component. 

// Here some time we have props which may or may not be passed to a component in this case we use optional props property denoted by "?". Here in code when using any property of string in .adminId like toUpperCase() it automatically adds "?" to it which is again for avoiding runtime error 