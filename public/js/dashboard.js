async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    console.log(title,content);
  
    const response = await fetch(`/api/post/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
// document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);


document.querySelector(".btn-post").addEventListener("click", newFormHandler); 
  // try {
  //   await fetch("/api/users/post", { method: "POST" });
  //   document.location.replace("/single-post");
  // } catch (error) {
  //   console.error(error);
  //   console.error("Failed to Post.");
  // }
;