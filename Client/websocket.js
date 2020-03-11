let websocket = new WebSocket("wss://10.37.110.140:3030");
websocket.onopen = function(event){
    websocket.send("dasfdsafdsa");
    console.log("dasfdsafdsa");
};
websocket.onmessage = function(event){
    console.log(event.data);
};
