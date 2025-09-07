// Klick-Button
document.getElementById("clickMe").addEventListener("click", function() {
  document.getElementById("message").textContent = "Du hast den Button geklickt!";
});

// Kontaktformular
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Danke für deine Nachricht!");
});
