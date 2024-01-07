import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User2 = () => {

  // Here meaning of {} as AuthUser is that we are lying to ts that empty object {} is of type AuthUser , If we are confident that user will be initilized after some time and will always have some value use type assertion in such cases instead of union with null   
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLoggedIn = () => {
    setUser({
      name: "Aman Bisht",
      email: "aman@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLoggedIn}>Log In</button>
      <div>
        The Future User2 Is {user?.name} And His Email Is {user?.email}
      </div>
    </div>
  );
};

export default User2;

// Here in User.tsx component we have user state variable of type both null or AuthType as because of null we always have to perform optional chaining check to access user object proeperty as AuthUser type. This is infact right thing to do but sometime we as a developer would know that user will always set to some value in future and will never be null again, So in this case use "TYPE ASSERTION" to let ts know that user will always be of type AuthUser and will never be null. For type assertion we use "as" keyword that will allow us to use property of AuthUser type without optional chaining operator.  
