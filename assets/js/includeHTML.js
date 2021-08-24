/*
  based on: https://www.w3schools.com/howto/howto_html_include.asp
*/

function includeHTML() {
  var elementsByTagName, i, element, component, xhttp;
  elementsByTagName = document.getElementsByTagName("*");
  for (i = 0; i < elementsByTagName.length; i++) {
    element = elementsByTagName[i];
    component = element.getAttribute("include-html");
    if (component) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {element.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Not Found";}
          element.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", component, true);
      xhttp.send();
      return;
    }
  }
}
