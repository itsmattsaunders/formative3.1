


// fetching headline data
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=nz&' +
          'apiKey=edffac2d5d5f47b987aa198ad334287d';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    });

$('#storyButton').click(function(){
    $('h1').hide();
});
