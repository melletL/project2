var React = require("react");

class date extends React.Component {
    render() {
        console.log("jsxregUser",this.props.registeredUser);
        let datePath = `/date/${this.props.dateRequested.year}/${this.props.dateRequested.month}/${this.props.dateRequested.day}/add`
        let events = this.props.registeredUser.map( item => {
          return <tr>
                    <td>{item.time}</td>
                    <td><b>{item.event}</b></td>
                    <td>{item.category}</td>
                    <td>{item.list}</td>
                </tr>
        });


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>{this.props.dateRequested.year}/{this.props.dateRequested.month}/{this.props.dateRequested.day}</h1>
                    Current events
                    <br/>
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Category</th>
                            <th>List</th>
                        </tr>
                    {events}
                    </table>
                    <br/>
                    <a href={datePath}>Add new events</a>
                </body>
            </html>
        );
    }
}


module.exports = date;