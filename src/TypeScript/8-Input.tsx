type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;    // Here type of event object of onChange by Input
};

const Input = (props: inputProps) => {

  // Here onChange handler is defined in component itself 
  const componentOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log("Change Event Triggered", e.target)
  }  

  return (
    <div>
      <input
        type="text"
        value={props.value}
        // onChange={(e) => props.handleChange(e)}
        onChange={componentOnChange}
      />
    </div>
  );
};

export default Input;

// Here when comes to handling onChange on input element we generally needs 2 props the input value and onChange handler function , Here the process of typing event object of onChange handler is also similar to typing one in onClick handler of button element just hover over the event object of function of onChange handler and there written the type of event object so copy paste it and we are done.

// Here we have defined onClick and onChange handler passed from parent component as props but same approach will be used if both handler function are defined in component itself , Typing event parameter remains same