
// type RandomeNoProps = {
//     value: number
//     isPositive?: boolean
//     isNegative?: boolean
//     isZero?: boolean
// }

type RandomeValueProps = {
    value: number
}

// Here meaning of this type is that we can never set isNegative and isZero as a prop when isPositive is set to true
type PositiveProps = RandomeValueProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeProps = RandomeValueProps & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type ZeroProps = RandomeValueProps & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomeNoProps = PositiveProps | NegativeProps | ZeroProps

const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomeNoProps) => {
  return (
    <div>
        <h4>RANDOME NUMBER RESTRICTING PROPS</h4>
        {value} Is {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  )
}

export default RandomNumber

// Here in this component we have 4 props in which value is mandatory and rest is optional based on isPositive , isNegative and isZero we are rendering different JSX , But there is lot of room for improvement ::

// Right now a developer can pass isPositive , isNegative and isZero at the same time and if it happens then bug might come as expected behaviour from this component is to accept only one props out of isPositive , isNegative and isZero. 

// So to acheive this we will create 3 seprate type for isPositive , isNegative and isZero and combine them with value property using "INTERSECTION" of type and then we can specify restrcition in each type using never type 