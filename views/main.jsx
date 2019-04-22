var React = require("react");

class main extends React.Component {
  render() {

        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="calendarCSS.css"/>
                </head>
                <body>
                    <div id="top">
                        <div>
                            <select name="monthOption" id="monthOption"></select>
                        </div>

                        <div>
                            <select name="yearOption" id="yearOption"></select>
                        </div>
                    </div>
                    <br/>
                    <div id="calendarHeader">
                        <div class="dayHeader">Mo</div>
                        <div class="dayHeader">Tu</div>
                        <div class="dayHeader">We</div>
                        <div class="dayHeader">Th</div>
                        <div class="dayHeader">Fr</div>
                        <div class="dayHeader weekend">Sa</div>
                        <div class="dayHeader weekend">Su</div>
                    </div>
                    <div>
                        <div id="calendarRender"></div>
                    </div>

                    <script src="calendarScript.js"></script>
                </body>
            </html>
        );
    }
}


module.exports = main;