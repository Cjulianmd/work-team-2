import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import {Img2} from '../style/StyleGlobal'
import Img1  from '../assets/img/img1.svg';
import {ButtonN} from '../style/StyleGlobal'
import buttonN1 from '../assets/img/ButtonN.svg'
import slider from '../assets/img/Slider1.svg'
import {TitleN, TextN , SliderN} from '../style/StyleGlobal'
import Tap1 from '../components/NavBar'
class Quiz extends Component {
    render() {
        return (
            <React.StrictMode>
                <Tap1/>
                <Img2><td><img src={Img1} alt=""/></td>
                </Img2>
               
                <TitleN>Explore new courses</TitleN>
                <TextN>
                    Study and watch all our new coursesand there are many of them
                </TextN>
                <SliderN><td><img src={slider} alt=""/></td></SliderN>
                 <ButtonN>
                    <NavLink to="/Pag2"><td><img src={buttonN1} alt=""/></td></NavLink>
                </ButtonN>
            </React.StrictMode>
        );
    }
}

export default Quiz;