$(document).ready(function () {
  $('#load-content').click(function () {
    $('#content-container').load('dynamic-content.html', function (response, status, xhr) {
      if (status === "error") {
        $('#content-container').html('<p> Erreur lors du chargement du contenu.</p>');
        console.error("Erreur AJAX : ", xhr.status, xhr.statusText);
      }
    });
  });
});

