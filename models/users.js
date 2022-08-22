const mongoose = require('mongoose');

//schema (blue print)
const userSchema = mongoose.Schema({
    user_name: { type: String, required: true },
    user_fullname: { type: String, required: true },
    user_password: { type: String, required: true },
    user_email: { type: String, required: true },
    user_join_date: { type: String, required: true },
});



//create model Object
module.exports = mongoose.model('User', userSchema);





//#################################################################################################
// const moment = require('moment')
// const conexao = require('../infraestrutura/conexao')

// class Users {
//     adiciona(user, res){

//         const user_join_date = moment().format('YYYY-MM-DD HH:MM:SS');
//         const userEhValido = user.user_password.length >= 8;

//         const validacoes = [
//             {
//                 nome: 'user',
//                 valido: userEhValido,
//                 mensagem: 'Password deve conter no minimo 8 caracteres'
//             },
//         ]

//         const erros = validacoes.filter(campo => !campo.valido)
//         const existemErros = erros.length

//         if(existemErros) {
//             res.status(400).json(erros)
//         } else {

//             const userDatado = {...user, user_join_date};
//             const sql = `INSERT INTO User SET ?`;
//             conexao.query(sql, userDatado, (error, resultados) => {
//                 if(error){
//                     res.status(400).json(error);
//                 } else {
//                     res.status(201).json(resultados);
//                 }
//             })
//         }
//     }

//     lista(res){
//         const sql = `SELECT * FROM User`;

//         conexao.query(sql, (error, resultados)=>{
//             if(error){
//                 res.status(400).json(error)
//             } else{ 
//                 res.status(200).json(resultados)
//             }
//         })
//     }

//     buscaPorUserName(res, username){
//         const sql = `SELECT * FROM User WHERE user_name=?`

//         conexao.query(sql, username, (error, resultados) => {
//             const user = resultados[0]
//             if(error){
//                 res.status(400).json(error)
//             } else {
//                 res.status(200).json(user)
//             }
//         })
//     }

//     buscaPorUserNamePassword(res, username, password){
//         const sql = `SELECT * FROM User WHERE user_name=? and user_password=?`

//         conexao.query(sql, username, password, (error, resultados) => {
//             const user = resultados[0]
//             if(error){
//                 res.status(400).json(error)
//             } else {
//                 res.status(200).json(user)
//             }
//         })
//     }
// }


// module.exports = new Users

