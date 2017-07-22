new Vue({
  el: '#app',
  data: {
    select: ["one","two","three","four"]
  }
})

document.getElementById('dropdown-toggle').addEventListener("click", function( event ) {
    var dropDownDisplay = document.getElementById('dropdown-menu').style.display;
    if(dropDownDisplay == "block") {
    	dropDownDisplay = "none";
    } else {
    	dropDownDisplay = "block";
    }
});
