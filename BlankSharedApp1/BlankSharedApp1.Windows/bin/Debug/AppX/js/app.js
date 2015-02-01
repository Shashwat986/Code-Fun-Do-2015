var userName_Last = null;

function onSubmit(eventInfo) {
    
    $(document).ready(function () {
        var userName = document.getElementById("q").value.trim();
        if (userName.length == 0)
            return;
        if (userName != userName_Last) {
            $(".pics").hide();
        }
        document.getElementById("output").innerText = userName + " is your search term.";
        $("#wait-timeline").show();
        $("#my-timeline").show();
        $("#my-timeline").html("");
        
        $.get('/jsons/entries.json', function (data) {
            data = JSON.parse(data);
            var flag = 0;
            for (var i = 0; i < data.length; i++)
            {
                nm = data[i].label;
                v = data[i].value;
                if (userName == nm.trim()) {
                    console.log(nm + "," + v);
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
            {
                console.log(nm + "," + v);
                url_s = 'http://172.27.20.103:1337/people/get?name=' + encodeURIComponent(userName) + '&pid=' + encodeURIComponent(v);
            }
            else
            {
                console.log(nm + "," + v + "," + userName);
                url_s = 'http://172.27.20.103:1337/people/get?name=' + encodeURIComponent(userName);
            }
            $.get(url_s).fail(function () {
                $("#my-timeline").hide();
            });
        });
        
        setTimeout(function () {
            createStoryJS({
                type: 'timeline',
                width: '800',
                height: '600',
                source: url_s,
                embed_id: 'my-timeline'
            });
            $("#wait-timeline").hide();
        }, 5000);
        
        //source: 'http://timeline.knightlab.com/static/welcome/welcome.json',
        //http://172.27.20.103:1337/people/get?name=sachin%20tendulkar
        ///jsons/test.json

        url_v = "https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27" + encodeURIComponent(userName) + "%27&$format=json&ImageFilters=%27Size%3AMedium%27";
        key_v = "gOW3yOZfJuQy7HEPJF05zC/DjMt8ngCEhskpk8abdbM";
        if (userName != userName_Last)
        $.ajax({
            url: url_v,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(key_v + ":" + key_v));
            }
        }).done(function (data) {
            //console.log(data);
            var images = data.d.results;
            ims = $(".pics");
            for (i = 0; i < ims.length; i++) $(ims.get(i)).attr("src", "");
            for (i=0;i<ims.length;i++)
            {
                $(ims.get(i)).attr("src", images[i].MediaUrl).delay(1500 * Math.floor(Math.random() * 5 + 1)).fadeIn(400, function () {
                    var $container = $("#right-div").isotope({
                        itemSelector: '.pics',
                        layoutMode: 'masonry'
                    });
                });
            }
            userName_Last = userName;
        });
    });
}

function init() {
    $(document).ready(function () {
        $("#q").quickselect({ 'ajax': '/jsons/entries.json' });
        // 'exactMatch': 'true', 
    });
};


function onCheckEnter(e) {
    if (e.keyCode == 13)
        onSubmit();
}