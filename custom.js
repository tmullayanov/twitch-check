var channels = ["ESL_SC2", "OgamingSC2",
    "cretetion", "freecodecamp", "storbeck", "habathcx",
    "RobotCaleb", "noobs2ninjas", "notexistentacc"]


$(document).ready(function() {
    $(".selector").on("click", function() {
        $(".selector").removeClass("active");
        $(this).addClass("active");
    });
});
