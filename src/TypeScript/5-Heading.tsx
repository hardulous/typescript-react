
type headingProps = {
    children: string
}

const Heading = (props: headingProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Heading

// Here in order to accept props which is coming as .children property we will use type as whatever value we are passing in btw closing tag of component. I means just pass value in btw closing tag an error will come by ts just hover over the error and ts will help you about what type the children property must be of.

// Here as soon as i pass string ts throw error "Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'." , Here i got the hint of what must be the type of children which is string 