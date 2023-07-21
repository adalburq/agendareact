import SelectProfissional from './SelectProfissional';
import SelectServico from './SelectServico';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Home = () => {

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <SelectProfissional></SelectProfissional>
      <br></br>
      <SelectServico></SelectServico>

      <div className="d-grid gap-2">
        <DateCalendar />
       </div>

    </LocalizationProvider>
  )
};

export default Home;