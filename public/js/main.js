document.querySelector(".btn-logout").addEventListener("click", async () => {
  try {
    await fetch("/api/users/logout", { method: "POST" });
    document.location.replace("/login");
  } catch (error) {
    console.error(error);
    console.error("Failed to logout.");
  }
});
// document.querySelector(".btn-logout").addEventListener("click", async () => {
//   try {
//     await fetch("/api/users/logout", { method: "POST" });
//     document.location.replace("/home");
//   } catch (error) {
//     console.error(error);
//     console.error("Failed to logout.");
//   }
// });

// document.getElementById("sign-up").addEventListener("click", async () => {
//   try {
//     await fetch("/api/users/logout", { method: "POST" });
//     document.location.replace("/login");
//   } catch (error) {
//     console.error(error);
//     console.error("Failed to logout.");
//   }
// });
