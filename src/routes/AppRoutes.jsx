import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Pagp from '../components/pagp';
import TestUtils from '../components/test'
import Acsent from '../components/acconysent'
import Preguntas from '../components/preguntas'
import S from '../components/actualizar'
import Splashscreen from '../containers/Splashscreen';
import Winc from '../components/coinswin'
import Back from '../containers/back';
import Pag1 from '../containers/Pag1'
import Pag2 from '../containers/Pag2'
import Pag3 from '../containers/Pag3'
import Registrer from '../containers/create'
import Home from '../containers/home'
import Very from '../containers/veryfication' 
import Elementari from '../components/elementari'
import Curso from '../components/curso'
import Coin from '../components/coinsin'
import Compracoi from '../components/compracoi'
import Estadistica from '../components/estadisticas'
import Transation from '../components/transation'
import Walled from '../components/walled'
import Addwalled from '../components/addwalled'
class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Splashscreen/>}/>
                    <Route path="/Pag1" element={<Pag1/>}/>
                    <Route path="/Pag2" element={<Pag2/>}/>
                    <Route path="/Pag3" element={<Pag3/>}/>
                    <Route path="/Singin" element={<Back/>}/>
                    <Route path="/registrer" element={<Registrer/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/veryfication" element={<Very/>}/>
                    <Route path="/pagina-perfil" element={<Pagp/>}/>
                    <Route path="/test" element={<TestUtils/>}/>
                    <Route path="/Account-settings" element={<Acsent/>}/>
                    <Route path="/preguntas" element={<Preguntas/>}/>
                    <Route path="/win" element={<Winc/>}/>
                    <Route path="/Actualizardatos" element={<S/>}/>
                    <Route path="/ele" element={<Elementari/>}/>
                    <Route path="/curso" element={<Curso/>}/>
                    <Route path="/Coin" element={<Coin/>}/>
                    <Route path="/compracoi" element={<Compracoi/>}/>
                    <Route path="/estadistica" element={<Estadistica/>}/>
                    <Route path="/transation" element={<Transation/>}/>
                    <Route path="/walled" element={<Walled/>}/>
                    <Route path="/addwalled" element={<Addwalled/>}/>
                    
                
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;