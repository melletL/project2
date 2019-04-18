var React = require("react");

class login extends React.Component {
  render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Login to your Calendar account!</h1>
                    <form method="POST" action="/login">
                        Username <input type="text" name="username"/><br/>
                        Password <input type="text" name="pw"/><br/>
                        <br/>
                        <input type="submit" value="Submit"/><br/>
                    </form>
                    <br/>
                    New to the Calendar app? <a href="/register">Register!</a>
                </body>
            </html>
        );
    }
}


module.exports = login;