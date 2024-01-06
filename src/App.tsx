import Greet from "./TypeScript/1-Greet";
import Person from "./TypeScript/2-Person";
import PersonList from "./TypeScript/3-PersonList";
import Status from "./TypeScript/4-Status";
import Heading from "./TypeScript/5-Heading";
import Oscar from "./TypeScript/6-Oscar";
import Button from "./TypeScript/7-Button";
import Input from "./TypeScript/8-Input";
import Container from "./TypeScript/9-Container";

function App() {

  const personName = {
    firstName: "Aman",
    lastName: "Bisht",
  };

  const personList = [
    {
      firstName: "Peter",
      lastName: "Parket",
    },
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Tom",
      lastName: "Hardy",
    },
  ]

  return (
    <>

      <h2>REACT WITH TYPESCRIPT</h2>

      {/* 1. Typing Props */}

      {/* Error as now have to provide messageCount and IsLoggedIn as props */}
      {/* <Greet name="Aman Bisht"/> */}
      
      {/* Error as name must be of type string not number */}
      {/* <Greet name={10}/>  */}

      <Greet name="Aman Bisht" isLoggedIn={false} messageCount={20} />
      <Person name={personName} />
      <PersonList persons={personList}/>
 
      {/* Here now restricted to pass status value out of loading , success and error */}
      {/* <Status status="susd"/> */}

      <Status status="success"/>
      <Heading>Hello Welcome To My Channel</Heading>
      <Oscar>
        <Heading>Oscars Goes To Leanoard Di Caprio</Heading>
      </Oscar>
      <Greet name="Aman Bisht" messageCount={2} isLoggedIn={true} adminId="22ds" />

      <Button handleClick={(e,id)=>{
          // Here now because of ts i also get autosuggesstion of properties present in event object "e" since it is of type mouseButtonClick event and ts know it at compile time  
          console.log("Click Event Triggered", e.target, id)         
      }} />

      <Input value="ts" handleChange={(e)=>{
        // Here again by ts since ts know at compile time that event object "e" is of type input onChange event object hence we get autosuggesstion for that 
        console.log("Change Event Triggered", e.target)
      }} />
     
      {/* Here passing style object as props and because of ts i am restricted to pass only valid css property and valid values else show error */}
      <Container style={{
        background:"blue",
        borderRadius:"10px",
        color:"white"
      }}/>

    </>
  );
}

export default App;

// ################ TYPESCRIPT ####################################

// The official website of typescript is https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// 1. Typing Props

// it is a way of giving structure to prop and variable we are passing to a component that is mentioning data type so that ts can give us compile time error if we are using some property that does not exist on that variable , to delcare type we can use both interface and type keyword but we should use interface if building library and type for application there is hardly any differences between them

// NOTE:: if we have passed some prop from parent component to child one then in tsx that child component must accept that prop by passing prop parameter to function else ts will throw an error

/* NOTE::

Types by Inference:

TypeScript knows the JavaScript language and will generate types for you in many cases. For example if we create a variable and assigning it to a particular value, TypeScript will use the value as its type by default that is

let message = "Hello World";

as we have initilize value hello world to message variable so by inference the default type of variable message is String 

*/

/*

Prop Types And Tips , we should destructure props whenever neccesary in a function component that is , App = ({p1,p2}:type name) => {} , 2nd when working in a large codebase we should always pull all ts types in a seprate .ts file just export them from their and use in any tsx component file , last always try to reuse one type in another type that is , EX

type Name = {    
  first:string,
  last:string
}

type Person = {
  fullName:Name   ( fullName type is coming from above type name reusing it )
  age:number
  address:string
}

*/

// @@@@@ NOTE :: Here in .tsx file we generally write react or jsx code but in .ts file we generally put code related to types like writing and exporting types to be used in other files or components. 