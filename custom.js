var channels = ["ESL_SC2", "OgamingSC2",
    "cretetion", "freecodecamp", "storbeck", "habathcx",
    "RobotCaleb", "noobs2ninjas"],
    spareLogo = 'https://dummyimage.com/50x50/000000/fff.jpg&text=HEY';

function makeURL(type, name) {
    return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' +
    name + '?callback=?';
}

function getChannelInfo(name) {
    $.getJSON(makeURL("streams", name), function(info) {
        var game, status;
        if (info.stream === null) {
            game = 'Offline';
            status = 'offline';
        } else if (info.stream === undefined) {
            game = 'Account closed';
            status = 'offline';
        } else {
            game = info.stream.game;
            status = 'online';
        };
        $.getJSON(makeURL('channels', name), function(info) {
            var html = '';
            var logo = info.logo === null ? spareLogo : info.logo,
                name = info.display_name === null ? channel : info.display_name,
                desc = status === 'online' ? info.status : '';
            html += "<div class='streamer row " + status + "'><div class='col-xs-2'><img src='" +
                logo + "' class='logo'></img></div><div class='col-xs-10 name'><a href='" +
                info.url + "' target='_blank'><strong>" + name +
                "</strong></a></div><div class='col-xs-10'><i>" + game + '<span class="hidden-xs">' +
                desc + '</i></span></div></div>';
                if (status === 'online')
                    $('#streamers').prepend(html);
                else $('#streamers').append(html);
                console.log("got following html: " + html);
        });
    });
}

$(document).ready(function() {
    channels.forEach(getChannelInfo);
    $(".selector").on("click", function() {
        $(".selector").removeClass("active");
        $(this).addClass("active");
    });
});
