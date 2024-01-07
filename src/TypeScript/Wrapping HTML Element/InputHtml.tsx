
// Here CustomInpProps contain all props that can be passed to native HTML input tag 
type CustomInpProps = React.ComponentProps<'input'>

const CustomInput = ({type , value , onChange, ...rest}: CustomInpProps) => {
  return (
    <input type={type} value={value} onChange={onChange} {...rest}  />
  )
}

export default CustomInput