document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.button');


//we need to get an object from chrome webpage which will contain details.
btn.addEventListener("click",async ()=>{
    let[tab] =  await chrome.tabs.query({active:true,currentWindow:true});
    // console.log(tab);
    chrome.scripting.executeScript({
        target : {tabId:tab.id},
        function : pickColor,
    });
    //This script injection wont work on extensions page.
});
async function pickColor() {
  
    try {
      const eyeDropper = new EyeDropper();
       const selectedColor = await eyeDropper.open();
      // const selectedColor = await eyeDropper.getColor();
      console.log(selectedColor);
    } catch (err) {
      console.error("Error in picking color:", err);
    }
   }
});
