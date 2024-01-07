// Here this CustomBtnProps consist of all props that native html button tag accept along with special variant prop
type CustomBtnProps = {

  variant: "primary" | "secondary";
  children: string;

} & Omit<React.ComponentProps<"button">, "children">;  // Here meaning of this Omit is from props type button we are removing property children and now we are restricting children to be of type string only

const CustomButton = ({
  variant,
  children,
  onClick,
  ...rest
}: CustomBtnProps) => {
  return (
    <button className={`class-with-${variant}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;

// Here sometime instead of relying on component library like mui we create our own basic element button , input , header div etc. Such components are capable of accepting special props apart from default basic HTML props.

// Here we have custom button component that apart from HTML button props also accept some special props like variant etc .. that will help us to style this button.

// However we also need to pass text as chidlren props to be visible as btn text , We also need to pass onClick prop and serveral other props which can be given to native HTML button element , So instead of mentioning all those props one by one to CustomBtnProps we can include all HTML button props in addition to our special props and we do this using "React.ComponentProps<Html Element Whose Props We Want>" that returns us all props a particular Html element can accept

// Here right know children is of type React.ReactNode which can have any type of value we can render in JSX , Let say we want to restrict this to pass only string value as children props so for this we will use "Omit" keyword. Omit takes an object type and removes the specified properties from it , Omit<Object Type , Property to be removed from this object type>
