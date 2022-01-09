var postsInfoText = $("#postsInfoText"), postsList = $("#postsList")

function parsePostsInfo(postsInfo) {
    let keys = Object.keys(postsInfo), size = keys.length
    if (!size) {
		postsInfoText.html("There are no posts")
		return
    }

    //adding the post list
    keys.forEach(key => {
		item = postsInfo[key]
			postsList.append(`
				<div id="${key}" class="post">
				<h2>${item["title"]}</h2>
				<p>${item["description"]}</p>
				</div>
		`)

		$(`#${key}`).click(function() { window.location = item["index"] })
    }) 
}

//getting information about the posts
fetch("posts/posts-info.json")
    .then(response => response.json())
    .then(content => parsePostsInfo(content))
