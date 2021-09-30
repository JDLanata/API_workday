var currentTime;
// var saveBtn = $("saveBtn");
var mustDo = localStorage.getItem("toDo")||[];
var toDo = mustDo;

// var tt1 = 

$("#t1").text(moment().format("HH:mm"))

console.log($('#t1'));

// var t2 = $("#t2");
// var t3 = $("#t3");
// var t4 = $("#t4");
// var t5 = $("#t5");
// var t6 = $("#t6");
// var t7 = $("#t7");
// var t8 = $("#t8");

// t1.textContent = moment().format("HH:mm");


function countTime () {
    console.log("second")
    currentTime = moment().format("ll [at] LTS")
    $("#currentDay").text(currentTime)
}
setInterval(countTime, 1000)

/* if(time in slot < currentTime){
use css in event slot for past setting

}else if(time in slot = currentTime){
use css class in event slot for present setting

}else{
use css class in event slot for future setting

} */

saveBtn.addEventListener("click", function lockIn(event){
event.preventDefault();

// event.target
//  toDo = getDocumentById("toDo").value
// localStorage.setItem("toDo", toDo)



})

//