$(function(){
  $('#quoteGrabber').click(function(){pasteSelection();});
});
function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "wysylamZapytanie"}, 
    function(response){
      console.log('Received response');
      console.log(response);
      var text = document.getElementById('text'); 
      localStorage.setItem('link', response.data);
      text.innerHTML = localStorage.getItem('link');
      
    });
  });
}