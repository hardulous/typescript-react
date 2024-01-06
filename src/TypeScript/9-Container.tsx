
type containerProps = {
    style: React.CSSProperties
}

const Container = (props: containerProps) => {
  return (
    <div style={props.style}>Container</div>
  )
}

export default Container

// Here when performing inline style we need to pass style object in style attribute of element and here this style object also have type which again comes from "@types/react" package which is React.CSSProperties

// Here since style object is also an object of any type of key-value pair but since programmer can accidently write invalid key and value so to avoid this and to get error at compile time we write type as React.CSSProperties which restricts developer to write only valid css properties 