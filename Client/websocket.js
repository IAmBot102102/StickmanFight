let websocket = new WebSocket("wss://10.92.246.41:3030");
websocket.onopen = function(event){

};
websocket.onmessage = function(event){
    let data = event.data.split(":");
    jQuery("#messages").append(data[0] + " : " + data[1]);
};
