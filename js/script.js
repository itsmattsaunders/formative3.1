// fetching headline data
// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=nz&' +
//           'apiKey=ADD_API_KEY_HERE';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });

// $('#storyButton').click(function(){
//
//   let newsApiKey;
//
//   $.ajax({
//     url: '/config.json',
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


console.log('js is loading, fella');
$(document).ready(function(){
  // console.log('ready');
  // Ajax function to retrieve news stories from newsAPI

  $('#storyButton').on('click', function() {
    $.ajax({
      url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
      type: 'GET',
      dataType: 'json',
      success:function(keys){
        newsApiKey = keys['newsApiKey'];
        getNewsData();
      },

        function(dataFromJSON){
        console.log(dataFromJSON);
        $('#NewsBox').empty();
        for (var i = 0; i < dataFromJSON.feed.length; i++) {
          // console.log(dataFromJSON.feed[i]);
          // console.log(dataFromJSON.feed[i].title);
          // console.log(dataFromJSON.feed[i].link);
          let showStory = `<div><h3>${dataFromJSON.feed[i].title}</h3><a href="${dataFromJSON.feed[i].link}">Read more</a><hr></div>`;
          // ${#geonetNewsBox}
          $('#NewsBox').append(showStory);

        }
      },
      error: function(){
        console.log('Something has gone wrong, bud');
      }
    })
  });

});
