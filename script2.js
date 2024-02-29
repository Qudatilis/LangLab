// Seçili metni KA veya KE kutucuklarına gönderme işlevi
function sendSelectedTextToBox(selectedText, boxId) {
  if (boxId === "sendToKA") {
    document.getElementById("KA").value += selectedText + "\n";
  } else if (boxId === "sendToKE") {
    document.getElementById("KE").value += selectedText + "\n";
  }
}

// Sağ tık menüsündeki seçeneklere tıklama olayı
document.addEventListener('contextmenu', function(event) {
  // Tıklanan öğe bir metin seçimi mi diye kontrol et
  var selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    // Seçili metni KA veya KE kutucuklarına gönder
    // Burada hangi kutucuğa gönderileceğini belirtmek için "sendToKA" veya "sendToKE" id'lerini kullanabilirsiniz
    var boxId = event.target.id;
    sendSelectedTextToBox(selectedText, boxId);
  }
});

// Web sitesi JavaScript kodu
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Eklentiden gelen mesajı işleyin ve KA veya KE kutucuğuna metni ekleyin
  // Örneğin:
  document.getElementById("KA").value += message.text + "\n"; // KA kutucuğuna eklemek için
  document.getElementById("KE").value += message.text + "\n"; // KE kutucuğuna eklemek için
});
