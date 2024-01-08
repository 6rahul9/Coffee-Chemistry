import React from 'react';
import { Container, Inner } from '../../Styling';
import TypeContent from '../../Components/RecipePage/TypeContent';
import NavBar from '../../Components/NavBar';

function Pourover() {
    return (
        <Container>
            <NavBar type='simple' />
            <Inner>
                <TypeContent
                    type='Pourover'
                    steps='pourover'
                    ingredients='French Press carafe, Burr Grinder, Digital Scale, Kettle'
                    paragraph="Beyond a museum masterpiece, Chemex hides a secret weapon: its filter.
                     This tightly woven enigma unlocks a world of bright, clean coffee flavors, unlike anything you've ever tasted."
                    flavor1='Clean'
                    flavor2='Smooth'
                />
            </Inner>
        </Container>
    );
}

export default Pourover;
