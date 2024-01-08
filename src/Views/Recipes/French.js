import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function French() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='French Press'
                    steps='french'
                    ingredients='French Press carafe, Burr Grinder, Digital Scale, Kettle'
                    paragraph="MoMA-approved masterpiece, Chemex: Where sleek design meets a uniquely clean and bright coffee experience, 
                    all thanks to its revolutionary filter."
                    flavor1='Fullbodied'
                    flavor2='Rich'
                />
            </Inner>
        </Container>
    );
}

export default French;
