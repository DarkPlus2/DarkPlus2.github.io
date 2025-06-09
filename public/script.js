function downloadMusic() {
  const platform = document.getElementById("platform").value;
  const musicUrl = document.getElementById("musicUrl").value;
  const result = document.getElementById("result");

  if (!musicUrl) {
    result.textContent = "Please enter a music URL.";
    return;
  }

  result.innerHTML = `
    ✅ Pretending to download from <b>${platform.toUpperCase()}</b><br>
    🔗 URL: ${musicUrl}
  `;
}
