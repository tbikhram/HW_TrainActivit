
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

// //inital values
// var trainName = "";
// var destination = "";
// var firstTime = 0;
// var frequency = "";




  // the click function for the submit button 

  $("#addTrainBtn").on("click", function(){

  	var trnName = $("#trainInput").val().trim();
  	var trnDestination = $("#destInput").val().trim();
  	var trnFirstTime = moment($("#ftInput").val().trim(), "HH:mm-military time").format("X");
  	var trnFrequency = $("#freqInput").val().trim();

  	// local "temp" object for holding train data
  	
  	var newTrn = {
  		name: trnName,
  		destination: trnDestination,
  		firstTime: trnFirstTime,
  		frequency: trnFrequency

  	}







  	// var startTime = moment(firstTime).format("HH:mm-military time");
  	// var currentTime = parseInt(moment().format("HH:mm-military time"));
  	// var traveledTime = startTime - currentTime;
  	// console.log(currentTime);
  	// console.log(traveledTime);
  	
  	database.push(newTrn);

  	// 		name: trnName,
  	// 	destination: trnDestination,
  	// 	firstTime: trnFirstTime,
  	// 	frequency: trnFrequency


  	// });



  	// dataAdded: firebase.database.ServerValue.TIMESTAMP

  	console.log(newTrn.name);
  	console.log(newTrn.destination);
  	console.log(newTrn.firstTime);
  	console.log(newTrn.frequency)
	

  

  

  		// name:name,
  		// destination: destination,
  		// firstTime: firstTime,
  		// frequency: frequency,
  		// dataAdded: firebase.database.ServerValue.TIMESTAMP
  


  	//temp for holding train times

  	// var newInfo = {
  	// 	train: infoTrain,
  	// 	destination: infoDestination,
  	// 	time: infoTime,
  	// 	frequency: infoFrequency
  	// }

  	// uploads the train data to the database 
  	// informationData.push(newInfo);

  	// //logging info to the console
  	// console.log(newinfo.train);
  	// console.log(newinfo.destination);
  	// console.log(newinfo.time);
  	// console.log(newinfo.frequency)

  	//alert test 
  	
	alert("Logged train info");

	//clear all of the text-boxes
	$("#trainInput").val("");
	$("#destInput").val("");
	$("#ftInput").val("");
	$("#freqInput").val("");

  	return false;

  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){
  	
  	console.log(childSnapshot.val());
 

 




  	//storing everthing enetered 
  	var trnName = childSnapshot.val().name; 
  	var trnDestination = childSnapshot.val().destination;
  	var trnFirstTime = childSnapshot.val().firstTime;
  	var trnFrequency = childSnapshot.val().frequency;

  	//logging input info to the panel 2 train schd
  	console.log(trnName);
  	console.log(trnDestination);
  	console.log(trnFirstTime);
  	console.log(trnFrequency);

  	// var trnFrequency = 5;
  	// var firstTime = "03:30";


//add to the train schd table
   $("#train-schedule> tbody").append("<tr><td>" 
  	+ trnName + "</td><td>" + trnDestination + "</td><td>" 
  	+ trnFirstTime+ "</td><td>" + trnFrequency + "</td></tr>");




});


