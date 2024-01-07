import { useEffect, useRef } from "react"

const DomRef = () => {

//   const inpRef = useRef(null)  // Here type of inpRef will always be null
//   const inpRef = useRef<null | HTMLInputElement>(null)  // Now have to use optional chaining check  

  const inpRef = useRef<HTMLInputElement>(null!)   // Here if we are sure that inpRef will have non-null value in future so we can use type assertion or non-null assertion operator by "null!"

  useEffect(()=>{
    // inpRef.current?.focus()   // Here optional chaining as inpRef can be null as well 
    inpRef.current.focus()
  },[])

  return (
    <div>
        <h4>DOM REF</h4>
        <input type="text" ref={inpRef} />
    </div>
  )
}

export default DomRef


// Here useRef() is used for 2 purpose either to store a read only dom element inside it or to store any mutable value inside it of any type. 

// Here initially ref is null but after some time it will definetly equal to some dom element so will have a type of HtmlDomElement so in order to access .focus() on inpRef we need to specify its type as "UNION" and to know the type of input tag just hover over it and copy paste from it. 

// Here meaning of (null!) it initializes the ref object with an initial value of null. The exclamation mark (!) is the non-null assertion operator. It tells TypeScript to treat the value as non-null, even though null is a valid initial value for a ref. 

// So, the overall meaning is that inpRef is a mutable reference to an HTMLInputElement, and its initial value is set to null. The non-null assertion operator is used here to let TypeScript know that even though the initial value is null, it will be assigned a valid reference before being used. This is a common pattern when working with refs in React.

