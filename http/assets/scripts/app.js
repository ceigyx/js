const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  //   const promise = new Promise((resolve, reject) => {
  //     //     const xhr = new XMLHttpRequest();
  //     //     xhr.open(method, url);
  //     //     xhr.responseType = "json";
  //     //     xhr.onload = () => {
  //     //       if (xhr.status >= 200 && xhr.status < 300) {
  //     //         resolve(xhr.response);
  //     //       } else {
  //     //         reject(new Error("something went wrong!"));
  //     //       }
  //     //     };
  //     //     xhr.onerror = () => {
  //     //       reject(new Error("failed to send request!"));
  //     //     };
  //     //     xhr.send(JSON.stringify(data));
  //     //   });
  //   });

  //   return promise;
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong! - server-side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "get",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postList = responseData;
    console.log(postList);
    for (const post of postList) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function createPost(title, body) {
  const userId = Math.random();
  const post = {
    title: title,
    body: body,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
