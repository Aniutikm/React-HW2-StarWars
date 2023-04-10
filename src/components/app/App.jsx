import React from "react";
import { Title } from "../title/title";
import "./App.css"
import { Cards } from '../cards/cards';
import { dataList } from './../../data/data';



function App() {
    return (
        <>
            <Title />
            <Cards data={dataList}/>
        </>
    )
}

export default App;
