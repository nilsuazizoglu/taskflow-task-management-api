const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

// CRUD endpoint'leri:
// GET    /api/tasks       -> tum gorevleri listele
// GET    /api/tasks/:id   -> tek bir gorevin detayini getir
// POST   /api/tasks       -> yeni gorev olustur
// PUT    /api/tasks/:id   -> var olan gorevi guncelle
// DELETE /api/tasks/:id   -> gorevi sil

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
