const mongoose = require('mongoose');

//schema (blue print)
const veiculoDataSchema = mongoose.Schema({
    vehicle_model_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo' },
    vehicledata_vin: { type: String, required: true },
    vehicledata_odometer: { type: String, required: true },
    vehicledata_tirePressure: { type: String, required: true },
    vehicledata_status: { type: String, required: true },
    vehicledata_batteryStatus: { type: String, required: true },
    vehicledata_fuelLevel: { type: String, required: true },
    vehicledata_lat: { type: String, required: true },
    vehicledata_long: { type: String, required: true },
});

//create model Object
module.exports = mongoose.model('VeiculoData', veiculoDataSchema);

//####################################################################


// const conexao = require('../infraestrutura/conexao')

// class VeiculosData {
//     adiciona(veiculoData, res){

//         const vehicleData = {...veiculoData};
//         const sql = `INSERT INTO VeiculoData SET ?`;
//         conexao.query(sql, vehicleData, (error, resultados) => {
//             if(error){
//                 res.status(400).json(error);
//             } else {
//                 res.status(201).json(resultados);
//             }
//         })
//     }

//     lista(res){
//         const sql = `SELECT * FROM VeiculoData`;

//         conexao.query(sql, (error, resultados)=>{
//             if(error){
//                 res.status(400).json(error)
//             } else{ 
//                 res.status(200).json(resultados)
//             }
//         })
//     }

//     buscaPorId(res, id){
//         const sql = `SELECT * FROM VeiculoData WHERE veiculoData_id=?`

//         conexao.query(sql, id, (error, resultados) => {
//             const veiculoData = resultados[0]
//             if(error){
//                 res.status(400).json(error)
//             } else {
//                 res.status(200).json(veiculoData)
//             }
//         })
//     }

//     altera(id, valores, res){
//         const sql = 'UPDATE VeiculoData SET ? WHERE id=?';

//         conexao.query(sql, [valores, id], (error, resultados) => {
//             if(error) {
//                 res.status(400).json(error);
//             } else {
//                 res.status(200).json({...valores, id});
//             }
//         })
//     }

//     deleta(id, res){
//         const sql = `DELETE FROM VeiculoData WHERE id=? LIMIT 1`;

//         conexao.query(sql, id, (error, resultados) => {
//             if(error){
//                 res.status(400).json(error);
//             } else {
//                 res.status(200).json({id});
//             }
//         })
//     }
// }


// module.exports = new VeiculosData


