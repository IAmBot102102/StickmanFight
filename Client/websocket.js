let websocket = new WebSocket("wss://10.37.110.140");
websocket.onopen = function(event)
{

}
websocket.onmessage = function(event)
{
    console.log(event.data);
}