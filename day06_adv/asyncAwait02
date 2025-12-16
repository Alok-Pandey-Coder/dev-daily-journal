function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("post Data fetched");
    }, 2000);
  })
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("Comment Data fetched");
    }, 3000);
  })
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

    console.log(postData);
    console.log(commentData);
    console.log("Fetching gets completed!");
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

getBlogData();
console.log("asynchronous behaviour happened! ")
