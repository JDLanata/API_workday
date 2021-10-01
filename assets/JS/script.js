var currentTime;


var timeTo = [

    t1 = moment("09:00", "hh:mm").format("kk:mm"),
    t2 = moment("10:00", "hh:mm").format("kk:mm"),
    t3 = moment('11:00', "hh:mm").format("kk:mm"),
    t4 = moment('12:00', "hh:mm").format("kk:mm"),
    t5 = moment('01:00', "hh:mm").format("kk:mm"),
    t6 = moment('02:00', "hh:mm").format("kk:mm"),
    t7 = moment('03:00', "hh:mm").format("kk:mm"),
    t8 = moment("04:00", "hh:mm").format("kk:mm"),
    t9 = moment("05:00", "hh:mm").format("kk:mm"),


];

console.log(t1)
$("#t1").text(t1).addClass("hour")
$("#t2").text(t2).addClass("hour")
$("#t3").text(t3).addClass("hour")
$("#t4").text(t4).addClass("hour")
$("#t5").text(t5).addClass("hour")
$("#t6").text(t6).addClass("hour")
$("#t7").text(t7).addClass("hour")
$("#t8").text(t8).addClass("hour")
$("#t9").text(t9).addClass("hour")

// console.log(JSON.parse($("#t2")))


// t1.textContent = moment().format("HH:mm");
// document.getElementById("toDo").style.backgroundColor = "#d3d3d3";
// console.log(description);


$('i').addClass("fas fa-save")
function countTime() {
    console.log("second")
    currentTime = moment().format("MMMM Do YYYY, hh:mm.ss")
    $("#currentDay").text(currentTime)

}
setInterval(countTime, 1000)



// t1.isAfter("currentTime");
// console.log(t1.isAfter("currentTime"))

var newTime = moment().format("kk:mm");
console.log(newTime)
for (let i = 0; i < timeTo.length+1; i++) {


    if (timeTo[i] < newTime) {
        $("#toDo" + [i]).addClass('past');
    }
    else if (timeTo[i] == newTime) {
        $("#toDo" + [i]).addClass('present');
    }
    else {
        $("#toDo" + [i]).addClass('future');
    }
    console.log([i]);
}






// $.each($("teaxtarea"),function(){
//     for( var i=0; localStorage.length; i++){
//         if(this.id == localStorage.key[i]){
//             $(this).val(localStorage.getItem(localStorage.key[i]))


//         }
//     }

//     })


// var mustDo = localStorage.getItem("toDo")||[];












var mustDo1 = $(".mustDo1").text(JSON.parse(localStorage.getItem("toDo1"))) || [];


console.log(mustDo1.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo1", JSON.stringify(mustDo1.val()))

})

//////////////////////////////////////////////////////

var mustDo2 = $(".mustDo2").text(JSON.parse(localStorage.getItem("toDo2"))) || [];


console.log(mustDo2.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo2", JSON.stringify(mustDo2.val()))

})


/////////////////////////////////////

var mustDo3 = $(".mustDo3").text(JSON.parse(localStorage.getItem("toDo3"))) || [];


console.log(mustDo3.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo3", JSON.stringify(mustDo3.val()))

})

/////////////////////////////////////

var mustDo4 = $(".mustDo4").text(JSON.parse(localStorage.getItem("toDo4"))) || [];


console.log(mustDo4.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo4", JSON.stringify(mustDo4.val()))

})
/////////////////////////////////////

var mustDo5 = $(".mustDo5").text(JSON.parse(localStorage.getItem("toDo5"))) || [];


console.log(mustDo5.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo5", JSON.stringify(mustDo5.val()))

})
/////////////////////////////////////

var mustDo6 = $(".mustDo6").text(JSON.parse(localStorage.getItem("toDo6"))) || [];


console.log(mustDo6.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo6", JSON.stringify(mustDo6.val()))

})

/////////////////////////////////////

var mustDo7 = $(".mustDo7").text(JSON.parse(localStorage.getItem("toDo7"))) || [];


console.log(mustDo7.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo7", JSON.stringify(mustDo7.val()))

})

/////////////////////////////////////

var mustDo8 = $(".mustDo8").text(JSON.parse(localStorage.getItem("toDo8"))) || [];


console.log(mustDo8.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo8", JSON.stringify(mustDo8.val()))

})

/////////////////////////////////////

var mustDo9 = $(".mustDo9").text(JSON.parse(localStorage.getItem("toDo9"))) || [];


console.log(mustDo9.val())

$("button").click(function (event) {
    event.preventDefault();

    localStorage.setItem("toDo9", JSON.stringify(mustDo9.val()))

})