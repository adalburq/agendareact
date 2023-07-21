import React, { useEffect, useState } from 'react';
import { Select, InputLabel, MenuItem, FormControl, Box } from '@mui/material';
import ApiProfissional from '../service/ApiProfissional';


const SelectProfissional = () => {

    const [profs, setProfs] = useState([]);
    const [prof, setProf] = useState("");

    useEffect(() => {
        async function fetchDataProfissional() {
          // You can await here
          const resposta = await ApiProfissional.getProfissionaisC();
          setProfs(resposta)
          console.log("xx:", resposta);
         
        }
        fetchDataProfissional();
      }, []);
    
    const handleProf = (event) => {
        setProf(event.target.value);
        console.log("profissional:", prof);
    };

    return (

        <div className="d-grid gap-2">
            <Box sx={{ minWidth: 240 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Profissional</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={prof}
                        label="Profissional"
                        onChange={handleProf}
                    >
                        {profs.map(profissional => (
                            <MenuItem key={profissional.id} value={profissional.id}>{profissional.nome}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>

    )

};

export default SelectProfissional;