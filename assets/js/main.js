
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