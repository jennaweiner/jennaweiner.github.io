$( document ).ready(function() {
    console.log( "ready!" );

var q1;
var q2;
var q3;
var correctAnswers;

$( "#start" ).click(function(){
  $( "#question1" ).fadeIn();
  $( ".progress" ).fadeIn();
  $( "#start" ).hide();
});

$("#q1-form").submit(function(e) {
	$( "#question1" ).hide(function(){
	});
  	$( "#question2" ).show("slide");
	$(".progress-bar").css("width", "5%");
	var q1answer = $('input[name=q1]:checked', '#q1').val();
	if(q1answer == 2)
		correctAnswers = 0 + 1;
	else
		correctAnswers = 0;	

	// put this at the end
	e.preventDefault();

});

$("#q2-form").submit(function(e) {
	$( "#question2" ).hide(function(){
	});
  	$( "#question3" ).show("slide");
	$(".progress-bar").css("width", "10%");
	var q2answer = $('input[name=q2]:checked', '#q2').val();
	if(q2answer == 4)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q3-form").submit(function(e) {
	$( "#question3" ).hide(function(){
	});
  	$( "#question4" ).show("slide");
	$(".progress-bar").css("width", "15%");
	var q3answer = $('input[name=q3]:checked', '#q3').val();
	if(q3answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q4-form").submit(function(e) {
	$( "#question4" ).hide(function(){
	});
  	$( "#question5" ).show("slide");
	$(".progress-bar").css("width", "20%");
	var q4answer = $('input[name=q4]:checked', '#q4').val();
	if(q4answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q5-form").submit(function(e) {
	$( "#question5" ).hide(function(){
	});
  	$( "#question6" ).show("slide");
	$(".progress-bar").css("width", "25%");
	var q5answer = $('input[name=q5]:checked', '#q5').val();
	if(q5answer == 3)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q6-form").submit(function(e) {
	$( "#question6" ).hide(function(){
	});
  	$( "#question7" ).show("slide");
	$(".progress-bar").css("width", "30%");
	var q6answer = $('input[name=q6]:checked', '#q6').val();
	if(q6answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q7-form").submit(function(e) {
	$( "#question7" ).hide(function(){
	});
  	$( "#question8" ).show("slide");
	$(".progress-bar").css("width", "35%");
	var q7answer = $('input[name=q7]:checked', '#q7').val();
	if(q7answer == 4)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q8-form").submit(function(e) {
	$( "#question8" ).hide(function(){
	});
  	$( "#question9" ).show("slide");
	$(".progress-bar").css("width", "40%");
	var q8answer = $('input[name=q8]:checked', '#q8').val();
	if(q8answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q9-form").submit(function(e) {
	$( "#question9" ).hide(function(){
	});
  	$( "#question10" ).show("slide");
	$(".progress-bar").css("width", "45%");
	var q9answer = $('input[name=q9]:checked', '#q9').val();
	if(q9answer == 3)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q10-form").submit(function(e) {
	$( "#question10" ).hide(function(){
	});
  	$( "#question11" ).show("slide");
	$(".progress-bar").css("width", "50%");
	var q10answer = $('input[name=q10]:checked', '#q10').val();
	if(q10answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q11-form").submit(function(e) {
	$( "#question11" ).hide(function(){
	});
  	$( "#question12" ).show("slide");
	$(".progress-bar").css("width", "55%");
	var q11answer = $('input[name=q11]:checked', '#q11').val();
	if(q11answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q12-form").submit(function(e) {
	$( "#question12" ).hide(function(){
	});
  	$( "#question13" ).show("slide");
	$(".progress-bar").css("width", "60%");
	var q12answer = $('input[name=q12]:checked', '#q12').val();
	if(q12answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q13-form").submit(function(e) {
	$( "#question13" ).hide(function(){
	});
  	$( "#question14" ).show("slide");
	$(".progress-bar").css("width", "65%");
	var q13answer = $('input[name=q13]:checked', '#q13').val();
	if(q13answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q14-form").submit(function(e) {
	$( "#question14" ).hide(function(){
	});
  	$( "#question15" ).show("slide");
	$(".progress-bar").css("width", "70%");
	var q14answer = $('input[name=q14]:checked', '#q14').val();
	if(q14answer == 3)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q15-form").submit(function(e) {
	$( "#question15" ).hide(function(){
	});
  	$( "#question16" ).show("slide");
	$(".progress-bar").css("width", "75%");
	var q15answer = $('input[name=q15]:checked', '#q15').val();
	if(q15answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q16-form").submit(function(e) {
	$( "#question16" ).hide(function(){
	});
  	$( "#question17" ).show("slide");
	$(".progress-bar").css("width", "80%");
	var q16answer = $('input[name=q16]:checked', '#q16').val();
	if(q16answer == 1)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q17-form").submit(function(e) {
	$( "#question17" ).hide(function(){
	});
  	$( "#question18" ).show("slide");
	$(".progress-bar").css("width", "85%");
	var q17answer = $('input[name=q17]:checked', '#q17').val();
	if(q17answer == 3)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q18-form").submit(function(e) {
	$( "#question18" ).hide(function(){
	});
  	$( "#question19" ).show("slide");
	$(".progress-bar").css("width", "90%");
	var q18answer = $('input[name=q18]:checked', '#q18').val();
	if(q18answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q19-form").submit(function(e) {
	$( "#question19" ).hide(function(){
	});
  	$( "#question20" ).show("slide");
	$(".progress-bar").css("width", "95%");
	var q19answer = $('input[name=q19]:checked', '#q19').val();
	if(q19answer == 2)
		correctAnswers += 1;

	// put this at the end
	e.preventDefault();
});

$("#q20-form").submit(function(e) {
	$( "#question20" ).hide(function(){
	});
	$( "#results" ).show("slide");
	$(".progress-bar").css("width", "100%");
	var q20answer = $('input[name=q20]:checked', '#q20').val();
	if(q20answer == 4)
		correctAnswers += 1;
	
	// put this at the end
	e.preventDefault();

	var fraction = "(" + correctAnswers + " out of 20" + ")";
	var percent = (correctAnswers/20)*100 + "%";
	$ ( "#ratio" ).html(fraction);
	$ ( "#percent" ).html(percent);

});
});
