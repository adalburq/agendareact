import axios from "axios";
import apiAgenda from "./ApiAgenda";

//const ApiProfissional = () => {

// PUT: exemplo que atualiza todos os registros
// { nome: "Filipe", idade: 27, email: exemplo@email.com }
// PATCH: exemplo que atualiza só o email
// { email: novoexemplo@email.com }

// buscar profissionais

// ok
const getServicos = async () => {
    const response = await apiAgenda.get("/servicos");
    const { data = [] } = response;
    return data;
}

export default {
    getServicos
};


