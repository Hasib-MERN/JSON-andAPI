const url = 'https://jsonplaceholder.typicode.com/users';
function loadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

     