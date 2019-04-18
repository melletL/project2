var React = require("react");

class main extends React.Component {
  render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Calendar app</h1>
                    <a href="/events">Schedule</a><br/>
                    <a href="/events">Add New event</a><br/>


                    <div id="leftArrow"> left arrow </div>
                    <div>
                        <select id="monthOption">
                            <option value="1">January</option>
                            <option value="2">Febuary</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                    <div>
                        <select id="yearOption">
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                    <div id="rightArrow">  right arrow </div>
                    <div id="calendarHeader">
                        <div class="dayHeader">Mo</div>
                        <div class="dayHeader">Tu</div>
                        <div class="dayHeader">We</div>
                        <div class="dayHeader">Th</div>
                        <div class="dayHeader">Fr</div>
                        <div class="dayHeader">Sa</div>
                        <div class="dayHeader">Su</div>
                    </div>
                    <div id="calendarRender">
                    </div>
                    <script src="calendarScript.js"></script>
                </body>
            </html>
        );
    }
}


module.exports = main;