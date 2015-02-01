function onSubmit(eventInfo) {
    
    $(document).ready(function () {
        var userName = document.getElementById("q").value.trim();
        if (userName.length == 0)
            return;
        document.getElementById("output").innerText = userName + " is your search term.";
        $("#wait-timeline").show();
        $("#wait-right").show();
        console.log('http://172.27.20.103:1337/people/get?name=' + encodeURIComponent(userName));
        $("#my-timeline").html("");
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

        url_v = "https://api.datamarket.azure.com/Bing/Search/v1/Image?Query=%27" + encodeURIComponent(userName) + "%27&$format=json";
        key_v = "gOW3yOZfJuQy7HEPJF05zC/DjMt8ngCEhskpk8abdbM";
        $.ajax({
            url: url_v,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(key_v + ":" + key_v));
            }
        }).done(function (data) {
            console.log(data);
            $("#wait-right").hide();
            var images = data.d.results;
            ims = $(".pics");
            for (i=0;i<ims.length;i++)
            {
                $(ims.get(i)).attr("src", images[i].MediaUrl).show();
            }
            var $container = $("#right-div").isotope({
                itemSelector: '.pics',
                layoutMode: 'masonry'
            });
        });
    });
}

function init() {
    $(document).ready(function () {
        $("#q").quickselect({ 'ajax': '/jsons/entries.json' });
        // 'exactMatch': 'true', 
    });
};
