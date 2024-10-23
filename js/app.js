let containerTop = document.getElementById('topId');
let closeBtn = document.getElementById('close-button');
//add fuctionality to hide the bar if the close button is clicked.
closeBtn.addEventListener('click',function(){
    containerTop.classList.add('close-top');
}
);