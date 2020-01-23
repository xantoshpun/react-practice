import React from 'react'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class SignUp extends React.Component {

    render() {
        return (
            <div class="container">
                <form method="POST" action="http://localhost:5000/signup">
                    <div class="form-group">
                        <label for="name">First Name:</label>
                        <input type="text" class="form-control" placeholder="Enter First Name" name="first_name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Last Name:</label>
                        <input type="text" class="form-control" placeholder="Enter Last Name" name="last_name" />
                    </div>
                    <div class="form-group">
                        <label for="name">Birthday:</label>
                        <input type="text" class="form-control" placeholder="Enter Birthday" name="birthday" />
                    </div>
                    <div class="form-group">
                        <label for="name">Gender:</label>
                        <input type="text" class="form-control" placeholder="Enter Gender" name="gender" />
                    </div>
                    <div class="form-group">
                        <label for="name">Mobile Number:</label>
                        <input type="text" class="form-control" placeholder="Enter Mobile Number" name="mobile" />
                    </div>
                    <div class="form-group">
                        <label for="name">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter Password" name="password" />
                    </div>
                    <div class="form-group">
                        <label for="name">Email:</label>
                        <input type="text" class="form-control" placeholder="Enter Email" name="email" />
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>

        )
    }
}

export default SignUp