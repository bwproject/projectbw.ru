<?php

// информация для minequery.

function fetch_server_info($ip, $port){
    $socket = fsockopen($ip, $port, $errno, $errstr, 0.5);
    
    if ($socket === false){
           return false;
    }
        
    fwrite($socket, "QUERY_JSON\n");
    
    $responce = stream_get_contents($socket);
    
    return json_decode($responce, true);   
}

?>
                 
