jQuery("#messageSend").click(function() {
    websocket.send(jQuery("#name").val() + " : " + jQuery("#messageBox").val());

});

