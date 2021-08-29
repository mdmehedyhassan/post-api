fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))

function setPosts(posts) {
    const mainPost = document.getElementById('main-post');

    posts.map(post => {
        const mainDiv = document.createElement('div')
        mainDiv.classList.add('col-md-4')
        mainDiv.classList.add('col-sm-6')
        mainDiv.classList.add('main-post-div')

        mainDiv.innerHTML = `
            <div class=p-3">
            <h1 class="m-3"> User ${post.userId} </h1>
            <h2 class="text-info"> ${post.title} </h2>
            <p class="text-warning" style="text-align: justify;">${post.body}</p>
            </div>
        `
        mainPost.appendChild(mainDiv)
    })

}