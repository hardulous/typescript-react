type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

// Now making type which is combination of TextOwnProps that is special props we can pass and html props it supposed to accept. So using generic we can handle it but now we need to make sure the special props we pass does not collide with html props the component can accept so use Omit keyword to handle this.
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

// Here E can be of type React element with default value of 'div'
const Text = <E extends React.ElementType = "div">({
  color,
  size,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export default Text;

// Here polymorphic is an advance topic which we as a developer does not require use unless we are building either a component library or design system but we should know what it is.

// Now let say we want to build a component just like <Typography/> component of mui. So we have Text component which accept size , color , children to render in JSX , But there is one problem as the underlying html element is always div so we need to control the html element to render in JSX as well , So we will accept another "as" prop for this which will tell us which html element to render , But here "as" can not be of type string then it can be any string so we need to restrict "as" to have only HTML native element value so its type must be "React.ElementType"

// Here now this component can render any html native element based on "as" prop now we have to make this component capabale of accepting html native element all props that element can have so for this we will make use of generics
