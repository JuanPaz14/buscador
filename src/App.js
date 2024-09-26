
import './App.css';

import {useState} from 'react';
import SearchBar from './components/serachBar';
import styled from 'styled-components'

const Button = styled.button  `
  padding: 10px;
  border-radius:5px;
  border:none;
  background-color:white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover{
    background-color:#efefef;  
  }
` ;

const people = [
  { 
    id:'people-01',
    title:'juan perez',
  },
  {
    id:'people-02',
    title:'juan lpoex',
  },
  {
    id:'people-03',
    title:'antonio paz',
  },
  {
    id:'people-04',
    title:'karla diaz',
  },
  {
    id:'people-05',
    title:'marcela paz',
  },
]

const calendar = [
  {
    id:'calendar-01',
    title:'sesion de seguimiento',
  },
  {
    id:'calendar-02',
    title:'revision de propuestas',
  },
  {
    id:'calendar-03',
    title:'evento para donar juguetes ',
  },
  {
    id:'calendar-04',
    title:'junta semanal de equipo',
  },
  {
    id:'calendar-05',
    title:'revision de pendientes con clientes',
  },
]


const emails = [
  {
    id:'email-01',
    title:'reporte de resultados',
  },
  {
    id:'email-02',
    title:'requisitos para cambios',
  },
  {
    id:'email-03',
    title:'cambio de contraseña',
  },
  {
    id:'email-04',
    title:'me de ayuda',
  },
  {
    id:'email-05',
    title:'ingreso campus ',
  },
]

function App() {

  const [data,setData] = useState([...people,...calendar,...emails]);
  const [selection,setSelection]= useState(null);
  const [currentOption,setCurrentOption]= useState('all');

  function handleClick(e){
      const op = e.target.name;
      switch(op){
        case 'all':
          setData([...people,...calendar,...emails]);
          setCurrentOption('all');
          break;
        case 'people':
          setData([...people])
          setCurrentOption('people');
          break;

        case 'calendar':
          setData([...calendar]);
          setCurrentOption('calendar');
          break;

        case 'email':
          setData([...emails]);
          setCurrentOption('emails');
          break;

        default:
      }

    
  }
  function handleItemSelected(item){
    setSelection(item)
  }
  
  return (
    <div>
        <Button name='all' onClick={handleClick}>All</Button>
        <Button name='people' onClick={handleClick}>People</Button>
        <Button name='calendar' onClick={handleClick}>Calendar</Button>
        <Button name='email' onClick={handleClick}>Email</Button>

        <div>
          
        </div>
        {selection ?<div>you selected: {selection.title}</div>: ''}
        <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>

  );
}

export default App;
