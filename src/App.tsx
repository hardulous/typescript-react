import Text from "./TypeScript/Polymorphic/Text";
import RandomNumber from "./TypeScript/Restricting Props/RandomNumber";
import Position from "./TypeScript/Template Literals Type/Position";
import ClassCounter from "./TypeScript/Typing Class/1-ClassCounter";
import Profile from "./TypeScript/Typing Component Prop/2-Profile";
import Private from "./TypeScript/Typing Component Prop/3-Private";
import Box from "./TypeScript/Typing Context/1-Box";
import { ThemeContextProvider } from "./TypeScript/Typing Context/3-ThemeContext";
import UserCompo from "./TypeScript/Typing Context/4-UserCompo";
import { UserProvider } from "./TypeScript/Typing Context/5-UserContext";
import List from "./TypeScript/Typing Generics/List";
import Greet from "./TypeScript/Typing Props/1-Greet";
import Person from "./TypeScript/Typing Props/2-Person";
import PersonList from "./TypeScript/Typing Props/3-PersonList";
import Status from "./TypeScript/Typing Props/4-Status";
import Heading from "./TypeScript/Typing Props/5-Heading";
import Oscar from "./TypeScript/Typing Props/6-Oscar";
import Button from "./TypeScript/Typing Props/7-Button";
import Input from "./TypeScript/Typing Props/8-Input";
import Container from "./TypeScript/Typing Props/9-Container";
import DomRef from "./TypeScript/Typing Ref/1-DomRef";
import MutableRef from "./TypeScript/Typing Ref/2-MutableRef";
import IsLoggedIn from "./TypeScript/Typing State/1-IsLoggedIn";
import User from "./TypeScript/Typing State/2-User";
import Counter from "./TypeScript/Typing State/4-Counter";
import Counter2 from "./TypeScript/Typing State/5-Counter2";
import CustomButton from "./TypeScript/Wrapping HTML Element/ButtonHtml";
import CustomComponent from "./TypeScript/Wrapping HTML Element/CustomComponent";
import CustomInput from "./TypeScript/Wrapping HTML Element/InputHtml";

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
  ];

  return (
    <>
      <h2>REACT WITH TYPESCRIPT</h2>

      {/* 1. Typing Props */}

      {/* Error as now have to provide messageCount and IsLoggedIn as props */}
      {/* <Greet name="Aman Bisht"/> */}

      {/* Error as name must be of type string not number */}
      {/* <Greet name={10}/>  */}

      {/* <Greet name="Aman Bisht" isLoggedIn={false} messageCount={20} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList persons={personList}/> */}

      {/* Here now restricted to pass status value out of loading , success and error */}
      {/* <Status status="susd"/> */}

      {/* <Status status="success"/> */}
      {/* <Heading>Hello Welcome To My Channel</Heading> */}
      {/* <Oscar>
        <Heading>Oscars Goes To Leanoard Di Caprio</Heading>
      </Oscar> */}
      {/* <Greet name="Aman Bisht" messageCount={2} isLoggedIn={true} adminId="22ds" /> */}

      {/* <Button handleClick={(e,id)=>{
          // Here now because of ts i also get autosuggesstion of properties present in event object "e" since it is of type mouseButtonClick event and ts know it at compile time  
          console.log("Click Event Triggered", e.target, id)         
      }} /> */}

      {/* <Input value="ts" handleChange={(e)=>{
        // Here again by ts since ts know at compile time that event object "e" is of type input onChange event object hence we get autosuggesstion for that 
        console.log("Change Event Triggered", e.target)
      }} /> */}

      {/* Here passing style object as props and because of ts i am restricted to pass only valid css property and valid values else show error */}
      {/* <Container style={{
        background:"blue",
        borderRadius:"10px",
        color:"white"
      }}/> */}

      {/* 2. Typing useState Hook */}

      {/* <IsLoggedIn/>
      <User/>
      <Counter/>
      <Counter2/> */}

      {/* 3. Typing Context Api */}

      {/* Here if we dont provide chidlren props then ts will show error that ThemeContextProvider component requires children props at compile time */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserProvider>
        <UserCompo/>
      </UserProvider> */}

      {/* 4. Typing useRef Hook */}

      {/* <DomRef/>
      <MutableRef/> */}

      {/* 5. Typing Class Component */}

      {/* Here my class component requires message prop so have to pass it else ts show error */}
      {/* <ClassCounter/> */}

      {/* <ClassCounter message="Hello The Class Counter Value Is =>"/> */}

      {/* 6. Typing Component As Props */}

      {/* <Private isLoggedIn={false} component={Profile}/>
      <Private isLoggedIn={true} component={Profile}/> */}

      {/* 7. Generic Props */}

      {/* <List
        items={["Spider Man", "Batman", "SuperMan"]}
        onClick={(val) => console.log(val)}
      />
      
      <List
        items={[1,2,3,4,5,6]}
        onClick={(val) => console.log(val)}
      /> */}

      {/* Here for above rendering primitive value in jsx no problem but below passing array of object as list result in rendering object in JSX so we have to restrict some prop types in our generic component */}
      {/* <List
        items={[
          { id: 1, fName: "mad", lName: "max" },
          { id: 2, fName: "spider", lName: "man" },
          { id: 3, fName: "bruce", lName: "wayne" },
        ]}
        onClick={(val) => console.log(val)}
      /> */}

      {/* 8. Restricting Props */}

      {/* <RandomNumber value={23} isPositive/> */}
      
      {/* Here i should not be allowed to send all 3 optional props only one out of them should be sent and rest be disallowed */}
      {/* <RandomNumber value={23} isPositive isNegative isZero/> */}
      
      {/* Here now i am restricted to pass only one prop out of isPositive , isNegative and isZero*/}
      {/* <RandomNumber value={23} isPositive/> */}

      {/* 9. Template Literal As Type */}
      
      {/* <Position position="center-top"/> */}

      {/* Here using Exclude keyword center-center is no longer the type case for position props so have to use center only */}
      {/* <Position position="center-center"/> */}
      {/* <Position position="center"/> */}

      {/* 10. Miscellaneous Topics */}

      {/* <CustomButton variant="primary" onClick={()=>console.log("I Am Custom Button")}>Custom Button</CustomButton> */}
      {/* <CustomInput type="number" onChange={(e)=>console.log("I Am Custom Input")}/> */}
      
      {/* Here this component accept same prop as Greet component */}
      {/* <CustomComponent name="Spider Man" messageCount={2} isLoggedIn={true} /> */}
      {/* <CustomComponent name="Batman" messageCount={10} isLoggedIn={false} /> */}
      
      {/* 11. Polymorphic Component */}

      {/* Here This component by "as" props can render different html element in browser hence it is a polymorphic component */}
      <Text size="lg" as="h1">Heading-1</Text>
      <Text size="md" as="p">Paragraph-1</Text>
      <Text size="sm" as="label" color="secondary">Label-1</Text>

      {/* Here error "as" prop is restricted to be of type Html native element  */}
      {/* <Text size="sm" as="we" color="secondary">Label</Text> */}

      {/* Now my Text component can accept html props as well based on as prop */}
      <Text size="md" as="p" id="p-2">Paragraph-2</Text>
      <Text size="sm" as="label" htmlFor="label-2" color="secondary">Label-2</Text>
      

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

// 2. Typing Hooks

// It means giving type to hook like useState , useReducer , useRef etc which are most used hook in react which help ts to throw error at compile time to avoid code crash at runtime

// 3. Typing Class Component

// There can be a case that we are working in a project that has been in development for few years when class component are used and function component are not introduced so in this case we should at least know how to type props and state variable in class component

// 4. Typing Generic Component

// There can be be case when we have a component which works for some props type let say string but same component need to be used props type number and other so on.. , So in this case we can make component Generic which means component which is reusable and work for variety of data types. Again syntax is <T> where T is parametrized type
