import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function Aeropress() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Aeropress'
                    steps='aeropress'
                    ingredients='Chemex carafe, chemex filters, grinder, digital scale, kettle'
                    paragraph="A MoMA resident and brewing icon, Chemex crafts a singular cup: bright, clean, and distinctively delicious, 
                    thanks to its innovative glass form and meticulously woven filter."
                    flavor1='Acidic'
                    flavor2='Rich'
                />
            </Inner>
        </Container>
    );
}

export default Aeropress;
