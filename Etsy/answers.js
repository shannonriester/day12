


window.addEventListener('hashchange', function() {
    var dataToRender = location.hash.slice(1);
    renderContent(dataToRender);

});


// document.querySelector('#content p').textContent = data.part2.answer;


function renderContent(answerContent) {
  document.querySelector('#content h2').textContent = items[answerContent].question;
  document.querySelector('#content p').textContent = items[answerContent].answer;
}
renderContent('part2');
