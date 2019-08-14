// console.log('js is loading like a little ripper');
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=nz&' +
          'apiKey=83fd1f538a3047bda04b37cfa36c45c3';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
