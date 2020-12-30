import React, { useState } from "react"

import Nav from 'react-bootstrap/esm/Nav';

import './category.css';
export const Category = (props) => {
    const [instalatiiOpen, setInstalatiiOpen] = useState(false)
    const [sanitareOpen, setSanitareOpen] = useState(false)
    const [termiceOpen, setTermiceOpen] = useState(false)
    const {handleChangeCategory} = props

    const showInstalatii = () => {
        setSanitareOpen(false);
        setInstalatiiOpen(!instalatiiOpen);
        setTermiceOpen(false);
    }

    const showTermice = () => {
        setSanitareOpen(false);
        setInstalatiiOpen(false);
        setTermiceOpen(!termiceOpen);
    }

    const showSanitare = () => {
        setSanitareOpen(!sanitareOpen)
        setTermiceOpen(false)
        setInstalatiiOpen(false)
    }
    return (
        <Nav className="flex-column" as="ul" align="left">
            <Nav.Item as="li" onClick={() => handleChangeCategory("Sanitare")} onMouseEnter={showSanitare}> <Nav.Link> <b> Obiecte Sanitare </b> </Nav.Link> </Nav.Item>
            {sanitareOpen && <Nav className="flex-column sanitareUl"  as="ul"> 
                <Nav.Link href="/"> Baie  </Nav.Link>
                <Nav.Link href="/"> Bucatarie  </Nav.Link>
                <Nav.Link href="/"> Dus </Nav.Link>
                <Nav.Link href="/"> Rezervoare si vase WC </Nav.Link>
                <Nav.Link href="/"> Baterii, seturi de dus </Nav.Link>
                <Nav.Link href="/"> Obiecte sanitare ceramice </Nav.Link>
                <Nav.Link href="/"> Cabine de dus, cazi </Nav.Link>
                <Nav.Link href="/"> Accesorii si mobilier de baie </Nav.Link>
                <Nav.Link href="/"> Chiuvete si lavoare </Nav.Link>
                <Nav.Link href="/"> Pisoare  </Nav.Link>
            </Nav>
            }
            <Nav.Item as="li" onClick={() => handleChangeCategory("Instalatii")} onMouseEnter={showInstalatii} > <Nav.Link> <b> Instalatii </b> </Nav.Link> </Nav.Item>
            {instalatiiOpen &&
            <Nav className="flex-column instalatiiUl" as="ul"> 
                <Nav.Link href="/"> Scule  </Nav.Link>
                <Nav.Link href="/"> Sifoane si accesorii </Nav.Link>
                <Nav.Link href="/"> Sisteme de fixare si montaj </Nav.Link>
                <Nav.Link href="/"> Recorduri flexibile </Nav.Link>
                <Nav.Link href="/"> Retele apa calda, rece </Nav.Link>
                <Nav.Link href="/"> Tevi otel, pex, cupru </Nav.Link>
                <Nav.Link href="/"> Fitinguri </Nav.Link>
            </Nav>
            }
            <Nav.Item as="li" onClick={() => handleChangeCategory("Termice")} onMouseEnter={showTermice}> <Nav.Link> <b> Termice </b> </Nav.Link> </Nav.Item>
            {termiceOpen &&
            <Nav className="flex-column termiceUl" as="ul"> 
                <Nav.Link href="/"> Centrale termice </Nav.Link>
                <Nav.Link href="/"> Sisteme de panouri solare </Nav.Link>
                <Nav.Link href="/"> Acesorii instalatii </Nav.Link>
            </Nav>
            }
        </Nav>
        
    )
}