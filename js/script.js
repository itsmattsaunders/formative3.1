let newsBox = document.getElementById('newsBox');
  console.log(newsBox);
$('#storyButton').click(function(){

    var key;
    $.ajax({
        url: "config.json",
        dataType: "json",
        type: "GET",
        success:function(data){
            key = data[0].NEWS_API_KEY; //key from config.json
            console.log(key);
            getData(key);
        },
        error:function(error){
            console.log("ERROR");
            console.log(error);
        }

    });


    function getData(key){
        console.log(key);
        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?' +
              'country=nz&' +
              'apiKey='+ key,
            dataType: "json",
            type: "GET",
            success:function(newsData){
                dataJSON = newsData;
                console.log(dataJSON);
                // console.log(newsData.articles.length);
                for (var i = 0; i < newsData.articles.length; i++) {
                    // console.log(newsData.articles[i].title, newsData.articles[i].description);
                    // newsBox.innerHTML += newsData.articles[i].title, newsData.articles[i].description;
                    // Use bootstrap cards to add image, title, description, link
                    newsBox.innerHTML +=
                    '<div class="card" style="width: 18rem;">' +
                          '<div class="card-body">' +
                            '<h5 class="card-title">'+newsData.articles[i].title+'</h5>'+
                            '<p class="card-text">'+newsData.articles[i].description+'</p>'+
                            '<a href="'+newsData.articles[i].url+'" class="btn btn-primary">Read more on that story here</a>'+
                          '</div> '+'</div>';
                }
            },
            error:function(error){
                console.log("Error");
            }

        });

    }
})
