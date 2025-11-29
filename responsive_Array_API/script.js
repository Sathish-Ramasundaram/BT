// 1. Array of objects
const users = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Tester" }
];

// 2. Simple search function using array of objects
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const result = users.find(user => user.name.toLowerCase() === query);

  const output = document.getElementById("output");
  if (result) {
    output.innerHTML = `<p>Found: ${result.name} (${result.role})</p>`;
  } else {
    output.innerHTML = `<p>No user found in local array.</p>`;
  }

  // 3. API call example (fetching a random user from JSONPlaceholder)
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
      output.innerHTML += `<p>API User: ${data.name} (${data.email})</p>`;
    })
    .catch(error => {
      console.error("API error:", error);
    });
});
