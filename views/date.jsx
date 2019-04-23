var React = require("react");

class date extends React.Component {
    render() {
        console.log("jsxregUser",this.props);
        let datePath = `/date/${this.props.dateRequested.year}/${this.props.dateRequested.month}/${this.props.dateRequested.day}`
        // <a href={datePath}>Add new events</a>

        let events = this.props.events.map( item => {
          return <tr scope="row">
                    <td>{item.starttime}</td>
                    <td><b>{item.eventname}</b></td>
                    <td>{item.eventtype}</td>
                    <td>{item.eventlocation}</td>
                    <td>{item.eventnotes}</td>
                    <td></td>
                    <td></td>
                </tr>
        });
        console.log(this.props.events)


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1 class="h1">{this.props.date}</h1>
                    <br/>
                    <h4>Events for the day</h4>

                    <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Event</th>
                            <th scope="col">Type</th>
                            <th scope="col">Location</th>
                            <th scope="col">Notes</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {events}
                    </table>
                    <br/>
                    <h4>Add a new event</h4>
                    <form action={datePath} method="POST"><br/>
                        Time<br/><input type="time" name="starttime"/><br/>
                        Event<br/><input type="text" name="eventname"/><br/>
                        Type<br/><input type="text" name="eventtype"/><br/>
                        Location<br/><input type="text" name="eventlocation"/><br/>
                        Notes<br/><input type="text" name="eventnotes"/><br/>
                        <br/>
                        <input class="btn btn-primary" type="submit" value="Submit"/>

                        <input type="text" name="startdate" value={this.props.date} class="invisible"/>
                        <input type="text" name="username" value={this.props.dateRequested.username} class="invisible"/>
                    </form>
                </body>
            </html>
        );
    }
}


module.exports = date;