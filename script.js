function searchUser(username){
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => displayResults(repos))
  .catch(error => 'Something went wrong, sorry :(');
}

function displayResults(repos){
  $('.results').removeClass('hidden');
  $('.results').html('');
  $('.results').append('<h2>Repos:</h2>');
  repos.forEach(repo=>{
    $('.results').append(`
      <ul><li><a href="${repo.url}" target="_blank">${repo.name}</a></li></ul>
    `)
  });
  
}



function clickSubmit(){
  $('#submit').submit(event => {
    event.preventDefault();
    const username = $('#username').val();
    searchUser(username);
  })
}




$(function(){
  clickSubmit();
});
