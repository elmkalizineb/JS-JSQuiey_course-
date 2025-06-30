// Libère le $ pour éviter les conflits
var jq = jQuery.noConflict();

// ✅ .load() exemple
jq('#load-content').click(function () {
  jq('#dynamic-content').load('https://jsonplaceholder.typicode.com/posts/1', function (response, status, xhr) {
    if (status === "error") {
      jq('#dynamic-content').html('<p>❌ Erreur lors du chargement.</p>');
    }
  });
});

// ✅ AJAX GET
jq('#get-data').click(function () {
  jq.get('https://jsonplaceholder.typicode.com/posts/1', function (data) {
    jq('#get-result').html(`
      <p><strong>Titre :</strong> ${data.title}</p>
      <p><strong>Contenu :</strong> ${data.body}</p>
    `);
  });
});

// ✅ AJAX POST
jq('#post-data').click(function () {
  jq.post('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Post AJAX',
    body: 'Contenu envoyé via POST',
    userId: 1
  }, function (data) {
    jq('#post-result').html(`
      <p><strong>ID reçu :</strong> ${data.id}</p>
      <p><strong>Titre :</strong> ${data.title}</p>
    `);
  });
});

// ✅ noConflict usage
jq('#conflict-button').click(function () {
  jq('#no-conflict-msg').text("✅ jQuery fonctionne en mode noConflict !");
});
