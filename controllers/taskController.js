const tasks = require("../data/tasks");

// Tum gorevleri dondurur.
function getAllTasks(req, res) {
  res.status(200).json({
    count: tasks.length,
    tasks
  });
}

// ID'si URL'de verilen gorevi bulur.
function getTaskById(req, res) {
  const taskId = Number(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Gorev bulunamadi." });
  }

  res.status(200).json(task);
}

// Yeni gorev ekler.
function createTask(req, res) {
  const { title, description = "", priority = "medium", assignee = "", status = "pending" } = req.body;

  // Baslik olmadan anlamli bir gorev olusturamayiz.
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "title alani zorunludur ve bos olamaz."
    });
  }

  const allowedPriorities = ["low", "medium", "high"];
  const allowedStatuses = ["pending", "in-progress", "completed"];

  if (!allowedPriorities.includes(priority)) {
    return res.status(400).json({
      message: "priority low, medium veya high degerlerinden biri olmali."
    });
  }

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      message: "status pending, in-progress veya completed degerlerinden biri olmali."
    });
  }

  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
    title: title.trim(),
    description: typeof description === "string" ? description.trim() : "",
    priority,
    assignee: typeof assignee === "string" ? assignee.trim() : "",
    status,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Gorev basariyla olusturuldu.",
    task: newTask
  });
}

// Gonderilen alanlarla gorevi gunceller.
function updateTask(req, res) {
  const taskId = Number(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Guncellenecek gorev bulunamadi." });
  }

  const { title, description, priority, assignee, status } = req.body;
  const allowedPriorities = ["low", "medium", "high"];
  const allowedStatuses = ["pending", "in-progress", "completed"];

  if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
    return res.status(400).json({ message: "title bos olmayan bir metin olmali." });
  }

  if (priority !== undefined && !allowedPriorities.includes(priority)) {
    return res.status(400).json({ message: "priority low, medium veya high olmali." });
  }

  if (status !== undefined && !allowedStatuses.includes(status)) {
    return res.status(400).json({
      message: "status pending, in-progress veya completed olmali."
    });
  }

  // Yalnizca gonderilen alanlari degistiriyoruz.
  if (title !== undefined) task.title = title.trim();
  if (description !== undefined) task.description = String(description).trim();
  if (priority !== undefined) task.priority = priority;
  if (assignee !== undefined) task.assignee = String(assignee).trim();
  if (status !== undefined) task.status = status;

  res.status(200).json({
    message: "Gorev basariyla guncellendi.",
    task
  });
}

// Gorevi listeden kaldirir.
function deleteTask(req, res) {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((item) => item.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Silinecek gorev bulunamadi." });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.status(200).json({
    message: "Gorev basariyla silindi.",
    task: deletedTask
  });
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
