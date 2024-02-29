// Arka plan betiği (background.js)
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'sendText') {
    // message.text içeriğini KA veya KE kutucuğuna ekleyin
    // Örneğin:
    var kaBoxContent = message.text + "\n"; // KA kutucuğuna eklemek için
    var keBoxContent = message.text + "\n"; // KE kutucuğuna eklemek için
  }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "sendToKA",
      title: "KA'ya Gönder",
      contexts: ["selection"]
    });
    
    chrome.contextMenus.create({
      id: "sendToKE",
      title: "KE'ye Gönder",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sendToKA" || info.menuItemId === "sendToKE") {
      // Seçili metni al ve ilgili kutucuğa gönderme işlevini çağır
      // Bu işlevi content.js dosyasında tanımlamamız gerekecek
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: sendSelectedTextToBox,
        args: [info.selectionText, info.menuItemId]
      });
    }
  });
  
  function sendSelectedTextToBox(selectedText, boxId) {
    // Burada seçili metni ve hedef kutucuk ID'sini alıp ilgili kutucuğa gönderme işlemini yapabilirsiniz
    // Örneğin, selectedText ve boxId'yi kullanarak belirli bir kutucuğa metni yapıştırabilirsiniz
  }
