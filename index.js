// profile pic, name, location
// const avatarEL = document.getElementById("profile-pic")
// const nameEl = document.getElementById("username-el")
// const locaionEl = document.getElementById("location-el")
// post image
// const postImageEL = document.getElementById("postimg-el")
// like counts
// const likeCountsEl = document.getElementById("likecounts-el")
//user comment
// const commentEl = document.getElementById("username-caption-el")
//username
// const usernameEl = document.getElementById("user-name-el")
// query feed selector main
const feedEl = document.querySelector("#feed")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "public/images/avatar-vangogh.jpg",
        post: "public/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "public/images/avatar-courbet.jpg",
        post: "public/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "public/images/avatar-ducreux.jpg",
        post: "public/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// sorting posts by likes in descending order
// posts.sort((a, b) => b.likes - a.likes) 

feedEl.innerHTML = posts.map(post => `
    <section>
        <div class="container">
            <div class="user-info">
                <img class="profile-pic" src="${post.avatar}" alt="profile picture of ${post.name}">
                <div class="user-text">
                    <p class="username">${post.name}</p>
                    <p class="location" >${post.location}</p>
                </div>
            </div>
            <img class="post-image" src="${post.post}" alt="post image of ${post.name}">
            <div class="icons">
                <img class="heart icon" src="images/icon-heart.png" alt="like icon heart shaped">
                <img class="cmt icon" src="images/icon-comment.png" alt="comment icon for comments">
                <img class="dm icon" src="images/icon-dm.png" alt="dm icon for direct messages">
            </div>
            <p class="like-counts">${post.likes} likes</p>
            <p class="usernamecaption"><span id="user-name-el" >${post.username}</span> ${post.comment}</p>
            <div class="space-in-between"> </div>
        </div>
    </section>
`).join('')



//FINAL ATTEMPT ABOVE - IGNORE BELOW (FIRST ATTEMPT)

// function renderPost(){
//     rendering likes for all posts
//     for (let i = 0 ; i < posts.length; i++){
//         avatarEL.src = posts[i].avatar
//         nameEl.innerHTML = posts[i].name
//         locaionEl.innerHTML = posts[i].location
//         postImageEL.src = posts[i].post
//         likeCountsEl.innerHTML = `${posts[i].likes} likes`
//         usernameEl.innerHTML = posts[i].username
//         commentEl.innerHTML = `${posts[i].username} ${posts[i].comment}`
//     }
// }

// renderPost()