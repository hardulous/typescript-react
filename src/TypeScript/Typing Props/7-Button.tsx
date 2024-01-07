type buttonProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;    // Here the handlerFunc accept event object and id as parameter
};

const Button = (props: buttonProps) => {
  return <button onClick={(e) => props.handleClick(e, 5)}>Button</button>;
};

export default Button;

// Here sometime we also have to provide type as event object since in js application we need to handle certain events as well. There are lot of events but most of the time we use onClick and onChange event only.

// Here let say this Button component accept a function as props which will execute when we click on button so basically a onClick handler function and this function accept 2 parameter an event object and id to console.log , Now in order to know the type of event object we again use package "@types/react" just hover over the event object of function of onClick and there it is written the type of that event object just copy paste it. 
