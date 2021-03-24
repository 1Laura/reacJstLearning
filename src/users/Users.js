function Users({user}) {

    let webColor = user.website.includes('.com') ? 'blue' : ''
    return (
        <div style={{border:'2px orange solid', width: '18rem'}} className={"card m-2 cardStyle"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>{user.name}</h5>
                <p>{user.email}</p>
                <p>{user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                <p>{user.phone.replace(/-/g, "")}</p>
                <p style={{color: webColor}}>{user.website}</p>
                <p>{user.company.name.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default Users