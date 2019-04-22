var React = require("react");

class addEventAtDate extends React.Component {
  render() {
    console.log(this.props.dateRequested)
    let date = `${this.props.dateRequested.year}-${this.props.dateRequested.month}-${this.props.dateRequested.day}`;
    let datePath = `/date/${this.props.dateRequested.year}/${this.props.dateRequested.month}/${this.props.dateRequested.day}`
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Adding a new event</h1>
                    <form method="POST" action={datePath}>
                        Date <input type="text" name="date" value={date}/><br/>
                        Time <input type="time" name="time"/><br/>
                        Event <input type="text" name="event"/><br/>
                        Category <input type="text" name="category"/><br/>
                        List <input type="text" name="list"/><br/>
                        <input type="text" name="username" value={this.props.dateRequested.username} class="invisible"/><br/>
                        <input type="submit" value="Submit"/><br/>
                    </form>
                </body>
            </html>
        );
    }
}


module.exports = addEventAtDate;