
  //---------------------------------------------------------------

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9X8LMFj8FOlBsW_BE9gqwitIsb7LNH6Y",
    authDomain: "train-times-a3cf0.firebaseapp.com",
    databaseURL: "https://train-times-a3cf0.firebaseio.com",
    storageBucket: "train-times-a3cf0.appspot.com",
    messagingSenderId: "804353314192"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//inital values
var trainName = "";
var destination = "";
var firstTime = 0;
var frequency = "";



  // the click function for the submit button 

  $("#addTrainBtn").on("click", function(){

  	var trnName = $("#trainInput").val().trim();
  	var trnDestination = $("#destInput").val().trim();
  	var trnFirstTime = moment($("#ftInput").val().trim(), "HH:mm-military time").format("X");
  	var trnFrequency = $("#freqInput").val().trim();
  	






  	// var startTime = moment(firstTime).format("HH:mm-military time");
  	// var currentTime = parseInt(moment().format("HH:mm-military time"));
  	// var traveledTime = startTime - currentTime;
  	// console.log(currentTime);
  	// console.log(traveledTime);
  	
  	database.ref().push({
  		name:name,
  		destination: destination,
  		firstTime: firstTime,
  		frequency: frequency,
  		dataAdded: firebase.database.ServerValue.TIMESTAMP
  	})


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
  	


  	return false;

  })

  database.ref().on("child_added", function(childSnapshot){

  	$(".new-employee").append("<tr>+<td>"+childSnapshot.val().name+"<td>"+
  		childSnapshot.val().destination+"<td>"+childSnapshot.val().firstTime+"<td>"+"<td>"
  		+childSnapshot.val().frequency)
  })





