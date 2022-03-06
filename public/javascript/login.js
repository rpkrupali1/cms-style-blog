async function loginFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    //check the reponse status
    if (response.ok) document.location.replace("/");
    else alert(response.statusText);
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);