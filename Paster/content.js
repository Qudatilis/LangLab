// İçerik betiği (content.js)
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

function sendSelectedTextToBox(selectedText, boxId) {
  // Seçili metni ve hedef kutucuğun ID'sini alarak ilgili kutucuğa metni yapıştırın
  // Örneğin:
  if (boxId === "sendToKA") {
    document.getElementById("KA").value += selectedText + "\n";
  } else if (boxId === "sendToKE") {
    document.getElementById("KE").value += selectedText + "\n";
  }
}
