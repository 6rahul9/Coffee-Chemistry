import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function Chemex() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Chemex'
                    steps='chemex'
                    ingredients='Chemex carafe, chemex filters, grinder, digital scale, kettle'
                    paragraph="From MoMA's halls to your cup, Chemex's elegance shines. Its sculptural form cradles a symphony of bright flavors,
                     meticulously extracted by its intricate filter."
                    flavor1='Fresh'
                    flavor2='Clean'
                />
            </Inner>
        </Container>
    );
}

export default Chemex;
