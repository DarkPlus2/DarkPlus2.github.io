const express = require("express");
const path = require("path");

const app = express();

// Set static folder
app.use(express.static("public"));

// Set view engine for HTML
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Home Route
app.get("/", (req, res) => {
  res.render("index.html");
});

// Demo download route (NOT a real downloader)
app.get("/download", (req, res) => {
  res.send("This is just a demo. No real music downloading.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
