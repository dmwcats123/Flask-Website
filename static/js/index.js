var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
const home_text = document.querySelector("#home_text");
const str_home_text = home_text.textContent;
const str_home_text_split = str_home_text.split("");


for (let i = 0; i < str_home_text_split; i++) {
    home_text.innerHTML += "<span>" + splitText[i] + "</span>";
}

mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('#navbar').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('#navbar').stop().fadeIn();
        
        up = !up;
    }
    mypos = newscroll;
});