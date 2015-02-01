function onSubmit(eventInfo) {
    var userName = document.getElementById("q").value;
    document.getElementById("output").innerHTML = userName + " is your search term.";
    
    $(document).ready(function () {
        $("#wait-timeline").show();
        $("#wait-right").show();

        createStoryJS({
            type: 'timeline',
            width: '800',
            height: '600',
            source: 'http://172.27.20.103:1337/people/get?name=sachin%20tendulkar',
            embed_id: 'my-timeline'
        });
        //source: 'http://timeline.knightlab.com/static/welcome/welcome.json',
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