
/*

  Here position prop can be ::

  "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

*/

type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"

// Now type based on template literal
type PositionProps = {

    // position: `${HorizontalPosition}-${VerticalPosition}`   // Here this is called template literal as type and by doing this ts automatically infer all possible combination value to be position type by combining all possible value of HorizontalPosition one by one with VerticalPosition seprated by "-"
    
    // Here now using Exclude now from template literal we are removing the value or case "center-center" and since we need "center" in place of that so using union for it
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}

const Position = ({position} : PositionProps) => {
  return (
    <div>Position Of Object Is {position}</div>
  )
}

export default Position

// Here in this component it accept a props called position which is of type string or out of many string passed as type option it can have only one value out of them. 

// Here we can mention type of position either using "UNION" of string but a good pratice when we have many string option as type we should use template literal to combine all values to create new type based on that. 

// Here using template literal dynamic combination of union value can be made but now there is one problem one of the value "center-center" i want it to be only center so for this we can use "Exclude" keyword in ts
