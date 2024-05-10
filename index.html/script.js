document.getElementById('homeLink').addEventListener('click', function() {
  showContent('homeContent');
});

document.getElementById('aboutLink').addEventListener('click', function() {
  showContent('aboutContent');
});

document.getElementById('contactLink').addEventListener('click', function() {
  showContent('contactContent');
});

function showContent(id) {
  var contents = document.querySelectorAll('.content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}
