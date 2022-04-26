import React, { Component, useEffect, useState } from 'react';
import './Checklist.css'
import { MdAutorenew } from "react-icons/md"


function Checklist(props) {

    const [placa, setPlaca] = useState(props.placa);
    const [checklist, setChecklist] = useState('');

    
    useEffect(() => {
        buscar()
    }, [])
    


    function buscar() {

        var element = document.getElementById(placa);
        element.classList.add("rotate");

        let url = `https://checklists-raupp.netlify.app/.netlify/functions/checklist?placa=${placa}`;
        console.log('Fazendo Fetch')
        console.log(placa)
        setChecklist('Carregando...');
        fetch(url)
            .then(res => {
                console.log('Pegando JSON')
                return res.json()
            })
            .then(json => {
                let jsonString = JSON.parse(JSON.stringify(json));
                console.log(jsonString);
                let checklist = jsonString.checklist;
                setChecklist(checklist);
                element.classList.remove("rotate");
            })
            .catch(error => {
                console.log('Houve um erro. Tentando novamente');
                buscar();
            })


    };

    return (
        <div className='checklist'>
            <p>{placa}</p>
            <button id={placa} onClick={buscar}><MdAutorenew color="green" fontSize="1.5em"/></button>
            <icon></icon>
            <span>{checklist}</span>
        </div>
    )

}

export default Checklist;