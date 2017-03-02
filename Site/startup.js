import Home from './Application/home';

try {

    document.addEventListener("DOMContentLoaded", docLoaded, false);
    function docLoaded() {

        // See Error alerts on devices for Dev Environment
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            window.onerror = function (msg, url, lineNo, columnNo, error) {
                var string = msg.toLowerCase();
                var substring = "script error";
                if (string.indexOf(substring) > -1) {
                    alert('Script Error: See Browser Console for Detail');
                }
                else {
                    var message = [
                        'Message: ' + msg,
                        'URL: ' + url,
                        'Line: ' + lineNo,
                        'Column: ' + columnNo,
                        'Error object: ' + JSON.stringify(error)
                    ].join(' - ');

                    alert(message);
                }
                return false;
            };
        }

        // Start App
        let home = new Home("Home");
        home.init();

    }
}
catch (e) {
    var errorDiv = document.getElementById("errorDiv");
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "app error -- " + e;
}