type personListProps = {
  persons: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <>
      <h4>PersonList ::</h4>

      {/* Here by type inference of callback function the parameter of cb function based on context in which they are getting executed will determine the type of parameter */}
      {props.persons.map((person, i) => {
        return (
          <div key={i}>
            {person.firstName} {person.lastName}
          </div>
        );
      })}
    </>
  );
};

export default PersonList;

// Here this PersonList component will accept props persons which is array of object of type firstName and lastName
