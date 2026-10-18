// Baslangic icin ornek gorevler. Bu proje verileri bellekte tutar;
// sunucu yeniden baslatildiginda eklenen/guncellenen gorevler sifirlanir.
const tasks = [
  {
    id: 1,
    title: "API taslagini hazirla",
    description: "Gorev endpoint'lerini belirle.",
    priority: "high",
    assignee: "Musa",
    status: "in-progress",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Postman testlerini yap",
    description: "CRUD endpoint'lerini kontrol et.",
    priority: "medium",
    assignee: "Ece",
    status: "pending",
    createdAt: new Date().toISOString()
  }
];

module.exports = tasks;
