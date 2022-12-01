//get all elements with the class name softskill at put them in a array
var softskills = document.getElementsByClassName("softskill");
var activeskill = document.getElementsByClassName("activesoftskill");
var firstimecounter = 0;

//change an elements class to activeskill with in the softskills
function softskillstagechanger() {
    //increment the counter
    firstimecounter += 1;
    //check if the firstimecounter is more than 1
    if (firstimecounter > 1) {
        activeskill[0].className = "softskill";
    };
    //generate random interger between 0 and the length of the softskills array
    var random = Math.floor(Math.random() * softskills.length);
    //change the class of the element with the random number to activeskill
    softskills[random].className = "activesoftskill";
};



//change an elements class to softskill with in the softskills
setInterval(softskillstagechanger, 3000);