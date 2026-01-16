async function ask() {
  const problem = document.getElementById("problem").value;
  const category = document.getElementById("category").value;

  const res = await fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ problem, category })
  });

  const data = await res.json();
  document.getElementById("result").textContent = data.result;
}
