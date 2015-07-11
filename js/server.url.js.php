'use strict';
var server = {};
server.web = "https://flabaweb-mellowonpsx.rhcloud.com";
server.api = "https://flaba-mellowonpsx.rhcloud.com";

<?php
    // test server
    if($_SERVER[SERVER_NAME] == "localhost")
    {
        echo "server.web = \"http://localhost:8000\"\n";
        echo "server.api = \"http://localhost:8080\"\n";
    }
    else
    {
        ?>

    var forceSSL = function () {
        if (window.location.protocol !== 'https' &&
            window.location.protocol !== 'https:' &&
            window.location.protocol !== 'https://' &&
            window.location.protocol !== 'https:/'  ) {
            console.log('protocol: ', window.location.protocol);
            window.location = window.location.href.replace('http', 'https');
        }
    };
    forceSSL();
        <?php
    }
?>

