
  //---------------------------------------------------------------

  //Initialize Firebase
   var config = {
    apiKey: "AIzaSyD9X8LMFj8FOlBsW_BE9gqwitIsb7LNH6Y",
    authDomain: "train-times-a3cf0.firebaseapp.com",
    databaseURL: "https://train-times-a3cf0.firebaseio.com",
    storageBucket: "train-times-a3cf0.appspot.com",
    messagingSenderId: "804353314192"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  // var trnNextTrainFromated ="";
  // var trnMinutesTill = "";

  // the click function for the submit button 

  $("#addTrainBtn").on("click", function(){

  	var trnName = $("#trainInput").val().trim();
  	var trnDestination = $("#destInput").val().trim();
    // here i will add in the moment js for the firstTime entered  
  	var trnFirstTime = $("#ftInput").val().trim();
    var trnFrequency = $("#freqInput").val().trim();
      // trnFirstTimeCoverted = moment(trFirstTime, "hh:mm").subtract(1,"year");
      // currentTime=moment();
      // diffTime = moment().diff(moment(trnFirstTimeCoverted), "minutes")
      // tRemainder = diffTime % frequency;
      // trnMinutesTill= frequency - tRemainder;
      // trnNextTrain = moment().add(minutesTill, "minutes");
      // trnNextTrainFormated = moment(nextTrain).format("hh:mm");




  	// local "temp" object for holding train data
  	
  	var newTrn = {
  		name: trnName,
  		destination: trnDestination,
  		firstTime: trnFirstTime,
  		frequency: trnFrequency
      // trnNextTrainFormated: trnNextTrainFormated,
      // minutesTill: trnMinutesTill
      

  	}





  	database.ref().push(newTrn);



  	// dataAdded: firebase.database.ServerValue.TIMESTAMP

  	console.log(newTrn.name);
  	console.log(newTrn.destination);
  	console.log(newTrn.firstTime);
  	console.log(newTrn.frequency)
	

  

  

	//alert("Logged train info");

	//clear all of the text-boxes
	$("#trainInput").val("");
	$("#destInput").val("");
	$("#ftInput").val("");
	$("#freqInput").val("");

  	 return false;

  });
// area for html to be updated with user inputs
  database.ref().on("child_added", function(childSnapshot){
  	
  	console.log(childSnapshot.val());


    console.log("I'm here");
 	//storing everthing enetered 
  	var trnName = childSnapshot.val().name; 
  	var trnDestination = childSnapshot.val().destination;
  	var trnFirstTime = childSnapshot.val().firstTime;
  	var trnFrequency = childSnapshot.val().frequency;
    // var trnNextTrainFormated = childSnapshot.val().trnNextTrainFormated;
    // var trnMinutesTill = childSnapshot.val().minutesTill;

  	//logging input info to the panel 2 train schd
  	console.log(trnName);
  	console.log(trnDestination);
  	console.log(trnFirstTime);
  	console.log(trnFrequency);

  	// var trnFrequency = 5;
  	// var firstTime = "03:30";


//add to the train schd table
   $(".train-schedule").append("<tr>+<td>"+trnName+"</td><td>"+trnDestination+"</td><td>"+trnFirstTime+"</td><td>"+trnFrequency+"</td></tr>");

 }, function(errorObject){

});

// $(document).ready(function() {
//   startTime();
// });

