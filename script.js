document.querySelector(".btn").addEventListener("click", () => {

    let value = document.querySelector("textarea").value;
    // console.log(value);

    let audio = document.querySelector("audio");
    audio.src = `https://api.voicerss.org/?key=fe55ffa945a44af99173f1168dd5e643&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${value}`;

})