import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import {Img2} from '../style/StyleGlobal'
import Img1  from '../assets/img/img2.svg';
import {ButtonN} from '../style/StyleGlobal'
import buttonN1 from '../assets/img/ButtonN.svg'
import slider from '../assets/img/Slider2.svg'
import {TitleN, TextN , SliderN} from '../style/StyleGlobal'
import Tap1 from '../components/NavBar'
class Quiz extends Component {
    render() {
        return (
            <React.StrictMode>
                <Tap1/>
                <Img2><td><img src={Img1} alt=""/></td>
                </Img2>
                <ButtonN>
                    <NavLink to="/Pag3"><td><img src={buttonN1} alt=""/></td></NavLink>
                </ButtonN>
                <TitleN>Explore new courses</TitleN>
                <TextN>
                Learn and learn new things everyday and get rewards be on top
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
            </React.StrictMode>
        );
    }
}

export default Quiz;