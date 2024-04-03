const { Router } = require("express");
const router = Router();

//using get, post and delete
router.get("/atendimento", (req, res) => {
  res.send("Chegou aqui, estamos listando os atendimentos!");
});

router.post("/atendimento", (req, res) => {
  res.send("Chegou aqui, estamos listando os atendimentos!");
});

router.put("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send("Estamos atualizando o atendimentos!" + id);
});

router.delete("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send("Estamos deletando os dados do cliente" + id + ".....");
});

module.exports = router;
