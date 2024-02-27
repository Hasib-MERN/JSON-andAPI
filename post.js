function loadPost(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res =>res.json())
   .then(data =>displayPost(data));
}
function displayPost(data){
    for(const post of data){
        // console.log(user)
        // const postText = document.getElementById('post-conatiner');
        // const li = document.createElement('li');
        // li.innerText = user.title;
        // postText.appendChild(li)
        
        const postContainer = document.getElementById("post-conatiner")
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML =`
        <h4> User-${post.userId} </h4>
        <h5> Post - ${post.title} </h5>
        <p> post description- ${post.body} </p>
        `;
        postContainer.appendChild(postDiv)
    }
}

loadPost();