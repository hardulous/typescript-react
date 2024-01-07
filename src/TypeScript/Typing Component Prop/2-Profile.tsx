
// exporting the type so can be used in other file as well 
export type ProfileProps = {
    name: string
}

const Profile = ({name} : ProfileProps) => {
  return (
    <div>Private Profile. Name Is {name}</div>
  )
}

export default Profile