import { useState, useEffect } from "react"
import { Navbar, Container,Nav } from "react-bootstrap"
import gitIcon from '../assets/img/git.svg';
import linkedinIcon from '../assets/img/linkedIn.svg';
import fbIcon from '../assets/img/facebook.svg';
import devcada_logo from '../assets/img/Devcada_Logo.png';

export const NavBar = () => {
    const [actveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="DevCada_Logo" src={devcada_logo} alt="DevCada Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={actveLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#projects" className={actveLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projets</Nav.Link>
                    <Nav.Link href="#skills" className={actveLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={gitIcon} alt="" /></a>
                        <a href="#"><img src={linkedinIcon} alt="" /></a>
                        <a href="#"><img src={fbIcon} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}