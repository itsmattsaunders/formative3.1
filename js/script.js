let newsBox = document.getElementById('NewsBox');
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
                            '<a href="#" class="btn btn-primary">'+newsData.articles[i].url+'</a>'+
                          '</div> '+'</div>';
                }
            },
            error:function(error){
                console.log("Error");
            }

        });

    }
})

// $.ajax({
//     url: 'config.json',
//     type: 'GET',
//     dataType: 'json',
//     success:function(keys){
//       newsApiKey = keys['newsApiKey'];
//       getNewsData();
//     },
//     error: function(){
//       console.log('cannot find config.json file, cannot run application');
//     }
//   });


// let myKeys = JSON.parse(keys);
// console.log(myKeys);

// fetching headline data
// let newsApiKey = '..config.json'
// let url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=nz&' +
//           // 'apiKey=83fd1f538a3047bda04b37cfa36c45c3';
//           `apiKey=newsApiKey`;
// let req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });
//
// $('#storyButton').click(function(){
//
//   let newsApiKey;
//
//   $.ajax({
//     url: 'config.json',
//     type: 'GET',
//     dataType: 'json',
//     success:function(keys){
//       newsApiKey = keys['newsApiKey'];
//       getNewsData();
//     },
//     error: function(){
//       console.log('cannot find config.json file, cannot run application');
//     }
//   });
//
//   getNewsData = () => {
//     $.ajax({
//       url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
//       type: 'GET',
//       dataType: 'jsonp',
//       success:function(dataFromNewsApi){
//         console.log(dataFromNewsApi);
//       },
//       error: function(){
//         console.log('Error, something went wrong with the request');
//       }
//   });
//   }
// })

// $(document).ready(function(){
//
//   // Ajax function to retrieve news stories from newsAPI
//
//   $('#storyButton').on('click', function() {
//     $.ajax({
//       url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
//       type: 'GET',
//       dataType: 'json',
//       success:function(keys){
//         newsApiKey = keys['newsApiKey'];
//         getNewsData();
//       },
//
//         function(dataFromJSON){
//         console.log(dataFromJSON);
//         $('#NewsBox').empty();
//         for (var i = 0; i < dataFromJSON.articles.length; i++) {
//           // console.log(dataFromJSON.feed[i]);
//           // console.log(dataFromJSON.feed[i].title);
//           // console.log(dataFromJSON.feed[i].link);
//           let showStory = `<div><h3>${dataFromJSON.articles[i].title}</h3><p>${dataFromJSON.articles[i].description}</p><a href="${dataFromJSON.articles[i].url}">Read more</a><hr></div>`;
//           // ${#geonetNewsBox}
//           $('#NewsBox').append(showStory);
//
//         }
//       },
//       error: function(){
//         console.log('Something has gone wrong, bud');
//       }
//     })
//   });
//
// });
