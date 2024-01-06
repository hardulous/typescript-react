
type oscarProps = {
    children: React.ReactNode   // Type of react component must learn it very imp
}

const Oscar = (props: oscarProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar

// Here this .children property of props can also accept another react component so in this case again to know type of chidlren property just hover over the error thrown by ts and we are done.

// In this case the error will be "Type '{ children: Element; }' has no properties in common with type 'IntrinsicAttributes'." , But for react component passed down as a props we generally use React.ReactNode as a type which comes from the package "@types/react" 