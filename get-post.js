$(document).ready(function () {
  // 🔵 GET Request
  $('#get-data').click(function () {
    $.get('https://jsonplaceholder.typicode.com/posts/1', function (data) {
      $('#get-result').html(`
        <h3>GET Result:</h3>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
      `);
    }).fail(function () {
      $('#get-result').html('<p>❌ Failed to fetch data.</p>');
    });
  });

  // 🟠 POST Request
  $('#post-data').click(function () {
    $.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'AJAX POST Example',
      body: 'This is a test POST request.',
      userId: 1
    }, function (data) {
      $('#post-result').html(`
        <h3>POST Result:</h3>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
      `);
    }).fail(function () {
      $('#post-result').html('<p>❌ Failed to post data.</p>');
    });
  });
});

