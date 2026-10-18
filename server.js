const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();
const PORT = process.env.PORT || 3000;

// Gelen JSON verilerini req.body icinde okuyabilmemizi saglar.
app.use(express.json());

// Logger, API'ye gelen her istegi kaydeder.
app.use(requestLogger);

// Basit bir ana sayfa: sunucunun ayakta olup olmadigini kontrol etmek icin.
app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API calisiyor.",
    endpoints: "/api/tasks"
  });
});

// Gorevlerle ilgili tum adresler bu router uzerinden yonetilir.
app.use("/api/tasks", taskRoutes);

// Olmayan bir adrese istek gelirse acik bir 404 cevabi don.
app.use((req, res) => {
  res.status(404).json({ message: "Bu endpoint bulunamadi." });
});

// Beklenmeyen hatalar icin merkezi hata yakalama katmani.
app.use((err, req, res, next) => {
  console.error("Sunucu hatasi:", err.message);
  res.status(500).json({ message: "Sunucuda beklenmeyen bir hata olustu." });
});

app.listen(PORT, () => {
  console.log(`TaskFlow API http://localhost:${PORT} adresinde calisiyor.`);
});
