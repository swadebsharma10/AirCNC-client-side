//  Save use  to Database

const saveUser = (user)=>{
    const currentUser ={
        email: user?.email
    }

    fetch(`http://localhost:5000/users`, {
        method: "PUT",
       headers: {
        'content-type': 'application/json'
       },
       body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

export default saveUser;