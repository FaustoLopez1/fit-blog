async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Workout"]').value;
    const content = document.querySelector('input[name="Meal"]').value;
  
    const response = await fetch(`/api/post`, {
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
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);


document.querySelector(".btn-post").addEventListener("click", async () => {
  try {
    await fetch("/api/users/post", { method: "POST" });
    document.location.replace("/single-post");
  } catch (error) {
    console.error(error);
    console.error("Failed to Post.");
  }
});