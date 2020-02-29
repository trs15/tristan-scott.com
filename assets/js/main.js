
//Dropdown controls
//Toggle dropdown when it is clicked
function toggleDropdown(id) {
    console.log(id);
    switch (id) {
        case "resume":
            hideActive();
            document.getElementById("resume_dropdown").classList.toggle("show");
            break;
        case "links":
            hideActive();
            document.getElementById("links_dropdown").classList.toggle("show");
            break;
        case "contact":
            hideActive();
            document.getElementById("contact_dropdown").classList.toggle("show");
            break;
}
    } 
    

//Close dropdown when focus lost 
window.onclick = function(event) {
    if (!event.target.matches('.dropdown_button')) {
      hideActive();
    }
  }

function hideActive(){
    var dropdowns = document.getElementsByClassName("dropdown_items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

window.onload = function(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
      sub_list();
    });
  } 
  
}
