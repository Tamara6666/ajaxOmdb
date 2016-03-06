$(document).ready(init);

var dataArray = [];


function init(){
	console.log("loaded");
	$('#click').click(clickButton);
	$('#click').click(urlHandler);
//	$('#click').click(dataObj);



}


function clickButton(){
	var $title = urlHandler();

	$.ajax('http://www.omdbapi.com/?t=' + $title, {
		success: function (data){
			console.log(data);
			makeCard(data);


		},
		error: function(error){
			console.log(error)
			console.log("Sorry, that movie isn't in out DataBase!");
		}
	})
}

function makeCard(data){
	var $img = $('<img>');
	$img.attr('src', data.Poster);
	$('#firstColumn').append($img);
	var $title = $('<p>').text(data.Title);
	var $year = $('<p>').text(data.Year);
	var $plot = $('<p>').text(data.Plot);
//	var $div = $('<div>');
//	$div.append($img).append($title).append($year).append($plot);
	//$('#firstColumn').append($img);
	$('#firstColumn').append($title);
	$('#firstColumn').append($year);
	$('#firstColumn').append($plot);

}

function urlHandler() {

  var $titleSearch = $('#searchMovie').val().toLowerCase().trim();

  if (!($titleSearch)) {
  	var $errorMessage = $('<p>').text("Sorry, That Movie isn't in our Database");
    $('#secondColumn').append($errorMessage);
  }
  return $titleSearch;

 console.log("through urlHandler");
}



 function clickSearch () {
   var $dataObj = data.Search;
   var $title = urlHandler();
   searchMovies(title);
}
/*
function searchMovies(title, page) {
	page = page || 1;
	//if title is in dataObj, index is not -1, then go through the chain of functions, make api call, etc.; if not, then throw the error msg.
	if (title !== undefined)

}

   if ($dataObj===undefined) {
   	error(error);
   	console.log("That Movie isn't in our Database");
   } else {
   	urlHandler();
   	makeCard();
   	clickButton();
   }
 }
*/
