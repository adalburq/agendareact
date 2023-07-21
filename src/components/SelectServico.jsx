import React, { useEffect, useState } from 'react';
import { Select, InputLabel, MenuItem, FormControl, Box } from '@mui/material';
import ApiServico from '../service/ApiServico';


const SelectServico = () => {

    const [servicos, setServicos] = React.useState([]);
    const [servico, setServico] = React.useState("");

    useEffect(() => {
        async function fetchDataServico() {
            // You can await here
            const resposta = await ApiServico.getServicos();
            setServicos(resposta)
            console.log("xx:", resposta);
            console.log("servico:", servico);
        }

        fetchDataServico();

    }, []);

    const handleServico = (event) => {
        setServico(event.target.value);
        console.log("servico:", servico);
    };

    return (
        
        <div className="d-grid gap-2">
            <Box sx={{ minWidth: 240 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Serviço</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={servico}
                        label="Serviço"
                        onChange={handleServico}
                    >
                        {servicos.map(servico => (
                            <MenuItem key={servico.id} value={servico.id}>{servico.nome}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

        </div>

    )

};

export default SelectServico;