chrome.browserAction.onClicked.addListener(function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "cliked"});  
   });
});

chrome.runtime.onMessage.addListener(
    function({changeIcon}, sender, sendResponse) {
     
      if (changeIcon === "true"){
         chrome.browserAction.setIcon({
            path: {
                19: "./images/active16.png",
                38: "./images/active16.png"
            }
      
          })
      } 
});

chrome.runtime.onMessage.addListener(
  function({changeIcon}, sender, sendResponse) {
             
      if (changeIcon === "false"){
          chrome.browserAction.setIcon({
            path: {
                  19: "./images/off-button-16.png",
                  38: "./images/off-button-16.png"
                  }
              
            })
        } 
});
        