var header = ['Plethora Flag',
  'Plethora Flag',
  'Plethora Flag',
  'Plethora Flag',
  'Plethora Flag',
  'ゴージャス松野、 私に気づいてください']

var projectsHeader = ['Projects',
  'Projects',
  'Projects',
  'Projects'
  'Projects',
  'プロジェクト']

var blogHeader = ["Captain's Log",
  "Captain's Log",
  "Captain's Log",
  "Captain's Log",
  "艦長の日記",
  "ブログ"]

function loadRandomHeader() {
  var randomNumber = Math.floor(Math.random() * (header.length));
  document.getElementById('displayHeader').innerHTML = header[randomNumber]
}

function loadRandomHeaderProjects() {
  var randomNumber = Math.floor(Math.random() * (projectsHeader.length));
  document.getElementById('displayProjectsHeader').innerHTML = projectsHeader[randomNumber]
}

function loadRandomHeader() {
  var randomNumber = Math.floor(Math.random() * (blogHeader.length));
  document.getElementById('displayBlogHeader').innerHTML = blogHeader[randomNumber]
}
