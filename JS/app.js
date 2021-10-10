function test() {
	var pass = document.getElementById("pass");
	var hideshow = document.getElementById("hideshow");
	if (pass.type == "text") {
		pass.type = "password";
		hideshow.innerHTML = "show";
	} else {
		pass.type = "text";
		hideshow.innerHTML = "hide";
	}
}
function pageRedirect() {
	window.location.href = "";
  }
