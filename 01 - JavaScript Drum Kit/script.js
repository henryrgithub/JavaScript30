document.addEventListener("keydown", (e)=>{
    if (e.key.length > 1) return;
    const encoded = e.key.toUpperCase().charCodeAt(0).toString();
    const ourKey = document.querySelector(`div[data-key="${encoded}"]`)
    if ((!ourKey)) return;
    console.log(`Playing ${e.key}`)
    ourKey.classList.add('playing')
    const ourSound = document.querySelector(`audio[data-key="${encoded}"]`)
    ourSound.currentTime = 0;
    ourSound.play();
});

document.addEventListener("keyup", (e)=>{
    if (e.key.length > 1) return;
    const encoded = e.key.toUpperCase().charCodeAt(0).toString();
    const ourKey = document.querySelector(`div[data-key="${encoded}"]`)
    if ((!ourKey)) return;
    console.log(`Releasing ${e.key}`)
    ourKey.classList.remove('playing')
});