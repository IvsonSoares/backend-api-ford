const mongoose = require('mongoose');

//schema (blue print)
const veiculoSchema = mongoose.Schema({
  vehicle: { type: String, required: true },
  volumeTotal: { type: Number, required: true },
  connected: { type: Number, required: true },
  softwareUpdates: { type: Number, required: true }
});

//create model Object
module.exports = mongoose.model('Veiculo', veiculoSchema);


//#######################################################################
// const conexao = require('../infraestrutura/conexao')

// class Veiculos {
//     adiciona(veiculo, res){

//         const vehicle = {...veiculo};
//         const sql = `INSERT INTO Veiculo SET ?`;
//         conexao.query(sql, vehicle, (error, resultados) => {
//             if(error){
//                 res.status(400).json(error);
//             } else {
//                 res.status(201).json(resultados);
//             }
//         })
//     }

//     lista(res){
//         const sql = `SELECT * FROM Veiculo`;

//         conexao.query(sql, (error, resultados)=>{
//             if(error){
//                 res.status(400).json(error)
//             } else{ 
//                 res.status(200).json(resultados)
//             }
//         })
//     }

//     buscaPorId(res, id){
//         const sql = `SELECT * FROM Veiculo WHERE veiculo_id=?`

//         conexao.query(sql, id, (error, resultados) => {
//             const veiculo = resultados[0]
//             if(error){
//                 res.status(400).json(error)
//             } else {
//                 res.status(200).json(veiculo)
//             }
//         })
//     }

//     altera(id, valores, res){
//         const sql = 'UPDATE Veiculo SET ? WHERE id=?';

//         conexao.query(sql, [valores, id], (error, resultados) => {
//             if(error) {
//                 res.status(400).json(error);
//             } else {
//                 res.status(200).json({...valores, id});
//             }
//         })
//     }

//     deleta(id, res){
//         const sql = `DELETE FROM Veiculo WHERE id=? LIMIT 1`;

//         conexao.query(sql, id, (error, resultados) => {
//             if(error){
//                 res.status(400).json(error);
//             } else {
//                 res.status(200).json({id});
//             }
//         })
//     }
// }


// module.exports = new Veiculos

