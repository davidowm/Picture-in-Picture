const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
const selectMedia = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error('Error in selectMedia function:', error);
  }
};

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
//on load
selectMedia();
