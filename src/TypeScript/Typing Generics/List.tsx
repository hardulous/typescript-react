
// type ListProps1 = {                // Here type which works for string only
//     items: string[]
//     onClick: (val: string) => void
// }

import { ReactNode } from "react"

// Here a parametrized generic of type "T" 
type ListProps2<T> = {
    items: T[]
    onClick: (val: T) => void
}

// Here before function () just mention T which must extend a base type let say empty object {} to avoid error by ts
const List = <T extends {}>({items , onClick} : ListProps2<T>) => {
  return (
    <div>
        <h2>Generic List</h2>
        {
            items.map((item,i)=>{

                // Here as item can be of any type because of generics so have to use type assertion to tell ts it is always of type ReactNode because inside JSX we can only render a ReactNode else code crashes 
                return <div key={i} onClick={()=>onClick(item)}>{item as ReactNode}</div>

            })
        }
    </div>
  )
}

export default List

// Here let say we have this List component which show list item in div and on click on them console.log the item but now i want this same component working for array of string should work for array of number and other data type as well so to achive this we will use "GENERICS". 

// Here meaning of <T extends {}> in the context of your List component, it is saying that the generic type T must be an object type or a type that extends from the empty object type. This constraint is used to ensure that the generic type T is compatible with the structure expected when working with objects. In simple words least restrictions when passing props to this List component. 

// To restrict the type of "T" we can use this "<T extends number | string>" , It means the props we pass to this List component where T can only be either string or number if any other than this then ts will show error. Also if T is dealing with object and we want every object in list to contain certain properties then use this "<T extends { id : number }>" , It means T can be an object which must contain at least id property of type number 