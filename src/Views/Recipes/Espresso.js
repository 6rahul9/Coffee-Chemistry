import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function Espresso() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Espresso'
                    steps='espresso'
                    ingredients='French Press carafe, Burr Grinder, Digital Scale, Kettle'
                    paragraph="Beyond its MoMA-worthy curves, Chemex's secret lies in its filter.
                     This tightly woven masterpiece unlocks a uniquely bright and clean coffee flavor, unlike any other."
                    flavor1='Rich'
                    flavor2='Acidic'
                />
            </Inner>
        </Container>
    );
}

export default Espresso;
