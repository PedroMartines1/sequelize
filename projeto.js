const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { deleteStudent } = require('./deleteStudent');  // Importe a função deleteStudent (como a que você forneceu).

app.use(bodyParser.json());

app.delete('/delete-student/:id', (req, res) => {
    const studentId = req.params.id;

    // Chama a função de exclusão com o id e o callback
    deleteStudent(studentId, (error, id) => {
        if (error) {
            return res.json({ success: false, message: error.message });
        }

        res.json({ success: true, message: `Estudante com ID ${id} excluído com sucesso.` });
    });
});

// Define a porta
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
