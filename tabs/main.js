var data = {
  red: {
    title: 'Red',
    body: 'Red is the color of blood, and so many other things about red!'
  },
  green: {
    title: 'Green',
    body: 'Green is the color of grass, and so many other things about green!'
  },
  blue: {
    title: 'Blue',
    body: 'Blue is the color of pretty eyes, and so many other things about blue!'
  },
};

window.addEventListener('hashchange', function(){
  var dataToRender = location.hash.slice(1);
  renderContent(dataToRender);
});


function renderContent(colorContent) {
  document.querySelector('#content h1').textContent = data[colorContent].title;
  console.log(data[colorContent].title);
  document.querySelector('#content main').textContent = data[colorContent].body;
}
renderContent('red');
