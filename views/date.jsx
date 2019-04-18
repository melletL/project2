var React = require("react");

class date extends React.Component {
  render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>In date</h1>
                    Current events

                    <br/>
                    <a href="/date/:year/:month/:day/add">Add new events</a>
                </body>
            </html>
        );
    }
}


module.exports = date;