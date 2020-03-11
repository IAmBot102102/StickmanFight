let websocket = new WebSocket("ws://10.37.110.240:3030");
websocket.onopen = function(event){
    websocket.send("dasfdsafdsa");
    console.log("dasfdsafdsa");
};
websocket.onmessage = function(event){
    console.log(event.data);
};
