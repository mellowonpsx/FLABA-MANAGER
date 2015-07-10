'use strict';
var server = {};
server.web = "http://flabaweb-mellowonpsx.rhcloud.com:80";
server.api = "http://flaba-mellowonpsx.rhcloud.com:80";

<?php
    // test server
    if($_SERVER[SERVER_NAME] == "localhost")
    {
        echo "server.web = \"http://localhost:8000\"\n";
        echo "server.api = \"http://localhost:8080\"\n";
    }
?>