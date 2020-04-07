// Based off of https://www.w3schools.com/howto/howto_js_accordion.asp
var accordians = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < accordians.length; i++) {
    accordians[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            // Change the text of the button
            var splitStr = this.innerText.split(' ')
            splitStr[0] = 'View';
            this.innerText = splitStr.join(' ');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            // Change the text of the button
            var splitStr = this.innerText.split(' ')
            splitStr[0] = 'Close';
            this.innerText = splitStr.join(' ');
        }
    });
}