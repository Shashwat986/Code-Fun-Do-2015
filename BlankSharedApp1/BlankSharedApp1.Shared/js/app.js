function onSubmit(eventInfo) {
    
    $(document).ready(function () {
        var userName = document.getElementById("q").value.trim();
        document.getElementById("output").innerText = userName + " is your search term.";
        $("#wait-timeline").show();
        $("#wait-right").show();
        //console.log('http://172.27.20.103:1337/people/get?name=' + encodeURIComponent(userName));
        createStoryJS({
            type: 'timeline',
            width: '800',
            height: '600',
            source: 'http://172.27.20.103:1337/people/get?name=' + encodeURIComponent(userName),
            embed_id: 'my-timeline'
        });
        //source: 'http://timeline.knightlab.com/static/welcome/welcome.json',
        //http://172.27.20.103:1337/people/get?name=sachin%20tendulkar
        ///jsons/test.json
        $("#wait-timeline").hide();
    });
}

function init()
{
    $(document).ready(function () {
        $("#q").quickselect({data : ['Option 1', 'Option 2', 'Option 3']});
    });
    

    /*$(document).ready(function () {
        $.getJSON('', function (data) {
            var list = [];

        })
    });*/
}