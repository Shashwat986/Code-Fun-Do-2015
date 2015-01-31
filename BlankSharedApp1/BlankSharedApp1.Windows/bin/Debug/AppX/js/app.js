function onSubmit(eventInfo) {
    var userName = document.getElementById("q").value;
    document.getElementById("output").innerHTML = userName + " is your search term.";
    
    $(document).ready(function () {
        $("#wait").show();
        createStoryJS({
            type: 'timeline',
            width: '800',
            height: '600',
            source: 'http://timeline.knightlab.com/static/welcome/welcome.json',
            embed_id: 'my-timeline'
        });
        $("#wait").hide();
    });

}