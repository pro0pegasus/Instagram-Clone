(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const c=document.querySelector("#feed"),n=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"public/images/avatar-vangogh.jpg",post:"public/images/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"public/images/avatar-courbet.jpg",post:"public/images/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"public/images/avatar-ducreux.jpg",post:"public/images/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}];c.innerHTML=n.map(i=>`
    <section>
        <div class="container">
            <div class="user-info">
                <img class="profile-pic" src="${i.avatar}" alt="profile picture of ${i.name}">
                <div class="user-text">
                    <p class="username">${i.name}</p>
                    <p class="location" >${i.location}</p>
                </div>
            </div>
            <img class="post-image" src="${i.post}" alt="post image of ${i.name}">
            <div class="icons">
                <img class="heart icon" src="/images/icon-heart.png" alt="like icon heart shaped">
                <img class="cmt icon" src="/images/icon-comment.png" alt="comment icon for comments">
                <img class="dm icon" src="/images/icon-dm.png" alt="dm icon for direct messages">
            </div>
            <p class="like-counts">${i.likes} likes</p>
            <p class="usernamecaption"><span id="user-name-el" >${i.username}</span> ${i.comment}</p>
            <div class="space-in-between"> </div>
        </div>
    </section>
`).join("");
