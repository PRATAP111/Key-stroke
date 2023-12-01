document.addEventListener('keydown',function(e){
    var getKeyNumber = e.keyCode
    var getAudio = document.querySelector(`audio[data-key="${getKeyNumber}"]`)

    if (!getAudio) return;

    getAudio.currentTime = 0.1;
    getAudio.play();

    var getDiv = document.querySelector(`div[data-key="${getKeyNumber}"]`)
    getDiv.classList.add('item_active')

    getDiv.addEventListener('transitionend',removeClassFunction)

    function removeClassFunction(e){
        getDiv.classList.remove('item_active')
    }
})      