$(document).ready(init);



function init(){
	console.log("loaded");
	$('#click').click(clickButton);
	$('#click').click(urlHandler);
	

	
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
	$('#secondColumn').append($title);
	$('#secondColumn').append($year);
	$('#secondColumn').append($plot);

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




 function dataObj () {
   var $dataObj = data.Search;
   if ($dataObj===undefined) {
   	error(error);
   	console.log("That Movie isn't in our Database");
   } else{
   	urlHandler();
   	makeCard();
   	clickButton();
   }
 }
