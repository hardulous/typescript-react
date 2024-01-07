type personProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: personProps) => {
  return <div>{props.name.firstName} {props.name.lastName}</div>;
};

export default Person;

// Here this component get props which contain name property which in turn an object with firstName and lastName property. Here no need to go to browser for debugging and see if any error has come as if ts is not throwing any error we are good. 