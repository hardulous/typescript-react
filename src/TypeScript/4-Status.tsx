
type statusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props : statusProps) => {
  
  let message=""
  if(props.status === "loading"){
    message = 'Loading...'
  }  
  else if(props.status === "success"){
    message = 'Data Fetched Successfully'
  }
  else{
    message = 'Error Fetching Data'
  }

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status

// Here let say we have Status component which out of 3 value of status either loading , success and error will render a different JSX so our type will look like this ::

type exProps = {
    status: string
}

// But passing this as props when invoking this Status component will have one problem if my status is a string other than loading , success and error then ts will still work fine and will not throw me error but bug will come in this Status component cuz we have handled only these string cases. So in order to restrict ts to accept only out of these 3 status code as props we will use "UNION" of string literals 