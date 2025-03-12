

function loadCategory() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(responce => responce.json())
    .then(data => displayCategory(data.categories))
}


function displayCategory(categories) {
    const categoryContainer = document.getElementById("category-container");
    for(const categori of categories) {
        // console.log(categori);
        const categoryBtn = document.createElement("button")
        categoryBtn.innerHTML = `
            <button class="btn btn-sm">${categori.category}</button>
        `
        categoryContainer.appendChild(categoryBtn)
    }
}

loadCategory();


// load videos

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(responce => responce.json())
    .then(data => displayVideos(data.videos))
}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    // for(const video of videos) {
    //     console.log(video);
    // }


    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card">
                <figure class="relative">
                    <img src="${video.thumbnail}" alt="Shoes" class="w-full h-[150px] object-cover"/>
                    <span class="absolute bottom-2 right-1 bg-[#171717] text-gray-200 px-2 rounded-lg text-xs py-1">${videos[0].others.posted_date}</span>
                </figure>
                <div class="flex gap-3 px-0  py-3">
                    
                    <div >
                        <div class="avatar">
                            <div class="w-8 rounded-full">
                            <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <h2 class="text-sm font-semibold">Building a Winning UX Strategy Using the Kano Model</h2>

                        <div class="flex items-center gap-2">
                            <p class="text-gray-600 text-sm">${video.authors[0].profile_name}</p>
                            <img src="./verify.png" alt="">
                        </div>

                        <p class="text-gray-600 text-xs font-semibold">${videos[0].others.views} views</p>
                    </div>
                </div>
            </div>
        `
        videoContainer.appendChild(videoCard);
    })
}