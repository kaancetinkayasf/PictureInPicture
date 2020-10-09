const videoElem = document.getElementById('video');
const startButton = document.getElementById('startbutton');
const screenButton = document.getElementById('screenbutton');

startButton.style.visibility='hidden';

async function mediaStreamSelector() {
    try{
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElem.srcObject = media;
        videoElem.onloadedmetadata = () => {
            videoElem.play();
        }
    }catch(e){
        console.log(e);
    }
}

screenButton.addEventListener('click', async () => {

    await mediaStreamSelector();
    startButton.style.visibility='visible';

});

startButton.addEventListener('click',async () => {
   
await videoElem.requestPictureInPicture();


});

