import axios from "axios";
import apiAgenda from "./ApiAgenda";

//const ApiProfissional = () => {

// PUT: exemplo que atualiza todos os registros
// { nome: "Filipe", idade: 27, email: exemplo@email.com }
// PATCH: exemplo que atualiza só o email
// { email: novoexemplo@email.com }

// buscar profissionais

// OK
// const getProfissionaisA = async () =>  await apiAgenda.get("/profissionais");const getProfissionaisA = async () =>  await apiAgenda.get("/profissionais");
const getProfissionaisA = async () => {
    return await apiAgenda.get("/profissionais");
}


const getProfissionais = async () => {
    const response = await axios.get(uri + "/profissionais");
    //const data = response.data;
    console.log("response:", response);
    return response;
}



// ok
const getProfissionaisB = async () => {
    const response = await apiAgenda.get("/profissionaisX");
    const { data = [] } = response;
    return data;
}
// ok
const getProfissionaisC = async () => {
    try {
        const response = await apiAgenda.get("/profissionais");
        // desconstruir o data do response, pegando data e renomeando para mamae
        // caso data venha null, retorna array mamae vazio 
        const { data : mamae=[] } = response;
        return mamae;
    } catch (error) {
        return [];
    }
}

async function getProfissionaisY() {
    try {
        const response = await axios.get(uri + "/servicos");
        //const data = response.data;
        ///setProfissionais(data);
        //console.log(profissionais);
        return response;
    } catch (error) {
        //console.log(error)
        return {};
    }
}

function getProfissionaisX() {
    axios.get(uri + "/profissionais")
        .then(response => response.data)
        .catch([]);
}

// incluir profissional
const postProfissional = async () => {
    try {
        const response = await axios.post(url + "/profissionais/profissional");
        setProfissionais(response.data);
        console.log(profissionais);
    } catch (error) {
        console.log(error)
    }
}

// alterar profissional

// inativar profissional
//}

export default {
    getProfissionais,
    getProfissionaisX,
    getProfissionaisY,
    getProfissionaisA,
    getProfissionaisB,
    getProfissionaisC
};


