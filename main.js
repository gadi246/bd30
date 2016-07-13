var sqrs = document.querySelectorAll('.game div');
var game = document.querySelector('.game');
var input = document.querySelector('.score');
var secondInput = document.querySelector('.hbd');
var slider = document.querySelector('.wrapper');

var pts = 0;
(function change(){
    setTimeout(function(){
        var winner = document.querySelector('.winner');
        var rand = Math.floor(Math.random() * 4)
        winner.classList.remove('winner');
        sqrs[rand].classList.add('winner');

        change();
    },700);
})();

game.addEventListener("click", function(e){
    hbd(pts);
    if(e.target.className === "winner") {
        pts += 5;
        input.innerText = 'Score ' + pts;
    }
    else if(e.target.className !== 'winner'){
        pts -= 5;
        input.innerText = 'Score ' + pts;
    }
});
function hbd(pts) {
    if(pts === 30){
        input.style.display = 'none';
        secondInput.style.display = 'block';
        slider.style.display = 'block';
    }
}

//some comment