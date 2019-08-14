// fetching headline data
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=nz&' +
          'apiKey=ADD_API_KEY_HERE';
var req = new Request(url);
fettch(req)
    .then(function(response) {
        console.log(response.json());
    });

$('#storyButton').click(function(){
    $('h1').hide();
});
