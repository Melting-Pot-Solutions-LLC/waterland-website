(function(){
    emailjs.init("user_fHCAuIg6awgTzhY28Nase");
})();
var myform = $("form#my_form");
myform.submit(function(event){
    event.preventDefault();
    var params = myform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    // Change to your service ID, or keep using the default service
    var service_id = "gmail";
    var template_id = "waterland";
    myform.find("button").text("Sending...");
    emailjs.send(service_id,template_id,params)
        .then(function(){
            alert("Sent!");
            myform.find("button").text("Send");
        }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Send");
        });})

$(document).ready(function() {
    $("#my_form").submit(function(e) {
        $("#my_form").hide('slow');
        $("#main-nav").show();
    });
});