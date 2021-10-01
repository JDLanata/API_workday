var currentTime;




var t1 = $("#t1").text("09:00");




var t2 = $("#t2").text(moment('10:00', 'kk:mm').format("kk:mm"));
var t3 = $("#t3").text(moment('11:00', 'kk:mm').format("kk:mm"));
var t4 = $("#t4").text(moment('12:00', 'kk:mm').format("kk:mm"));
// var t5 = $("#t5").text(moment('20:00', 'kk:mm').format("kk:mm"));
var t6 = $("#t6").text(moment('14:00', 'kk:mm').format("kk:mm"));
var t7 = $("#t7").text(moment('15:00', 'kk:mm').format("kk:mm"));
var t8 = $("#t8").text(moment('16:00', 'kk:mm').format("kk:mm"));


var t5 = $("#t5").text("23:00");


// t1.textContent = moment().format("HH:mm");
// document.getElementById("toDo").style.backgroundColor = "#d3d3d3";
        // console.log(description);

var timeTo = [];

function countTime () {
    console.log("second")
    currentTime = moment().format("MMMM Do YYYY, kk:mm.ss")
    $("#currentDay").text(currentTime)
     
}
setInterval(countTime, 1000)




var newTime = moment().format("kk:mm");
for (let i = 1; i < 9; i++) {
    
   
    if ($("#t"+[i]) > newTime){
        $("#toDo"+[i]).addClass('past');
    }
    else if ($("#t"+[i]) == newTime){
        $("#toDo"+ [i]).addClass('present');
    }
    else{
        $("#toDo"+[i]).addClass('future');
    }
    console.log($("#t"+[i]));
}


    



// $.each($("teaxtarea"),function(){
//     for( var i=0; localStorage.length; i++){
//         if(this.id == localStorage.key[i]){
//             $(this).val(localStorage.getItem(localStorage.key[i]))
    
    
//         }
//     }
    
//     })

    
// var mustDo = localStorage.getItem("toDo")||[];











   
    var mustDo1 = $(".mustDo1").text(JSON.parse(localStorage.getItem("toDo1")))||[];
    
    
    console.log(mustDo1.val())
    
    $("button").click(function(event){
        event.preventDefault();
        
localStorage.setItem("toDo1",JSON.stringify(mustDo1.val()))

})

//////////////////////////////////////////////////////

var mustDo2 = $(".mustDo2").text(JSON.parse(localStorage.getItem("toDo2")))||[];


console.log(mustDo2.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo2",JSON.stringify(mustDo2.val()))

})


/////////////////////////////////////

var mustDo3 = $(".mustDo3").text(JSON.parse(localStorage.getItem("toDo3")))||[];


console.log(mustDo3.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo3",JSON.stringify(mustDo3.val()))

})

/////////////////////////////////////

var mustDo4 = $(".mustDo4").text(JSON.parse(localStorage.getItem("toDo4")))||[];


console.log(mustDo4.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo4",JSON.stringify(mustDo4.val()))

})
/////////////////////////////////////

var mustDo5 = $(".mustDo5").text(JSON.parse(localStorage.getItem("toDo5")))||[];


console.log(mustDo5.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo5",JSON.stringify(mustDo5.val()))

})
/////////////////////////////////////

var mustDo6 = $(".mustDo6").text(JSON.parse(localStorage.getItem("toDo6")))||[];


console.log(mustDo6.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo6",JSON.stringify(mustDo6.val()))

})

/////////////////////////////////////

var mustDo7 = $(".mustDo7").text(JSON.parse(localStorage.getItem("toDo7")))||[];


console.log(mustDo7.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo7",JSON.stringify(mustDo7.val()))

})

/////////////////////////////////////

var mustDo8 = $(".mustDo8").text(JSON.parse(localStorage.getItem("toDo8")))||[];


console.log(mustDo8.val())

$("button").click(function(event){
event.preventDefault();

localStorage.setItem("toDo8",JSON.stringify(mustDo8.val()))

})