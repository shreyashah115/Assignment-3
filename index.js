var fs = require("fs");

var axios = require("axios").default;
var query = process.argv[2];
if (!query) {
  console.log("Please provide a valid keyword for search!");
  return;
}
var options = {
  method: "GET",
  url: "https://jikan1.p.rapidapi.com/search/anime",
  params: { q: query },
  headers: {
    "x-rapidapi-key": "307b52db22msh61653aee9f42227p1a7986jsnd58b519186fa",
    "x-rapidapi-host": "jikan1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    var data = response.data;

    fs.writeFile(
      "Anime-results.txt",
      JSON.stringify(data.results),
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  })
  .catch(function (error) {
    console.error("No results found.", error);
  });
