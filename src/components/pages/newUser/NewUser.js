import React from 'react'
import "./NewUser.css"

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="viccky"/>
                </div>
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="viccky"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="enter a Full Name"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email " placeholder="update email"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="enter you password "/>
                </div>
                <div className="newUserItem">
                    <label>Other</label>
                    <input type="text" placeholder="viccky"/>
                </div>
                <div className="newUserItem">
                    <label>Phone </label>
                    <input type="number" placeholder="08165755001"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="lagos Nigeria"/>
                </div>
                <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">female</label>
                    <input type="radio" name="gender" id="other" value="other" /> 
                    <label for="other">Other </label>  
                </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
