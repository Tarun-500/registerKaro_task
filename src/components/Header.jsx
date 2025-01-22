import { useState } from "react"
import PhoneIcon from "../assets/images/icons/phone.png";
import EmailIcon from "../assets/images/icons/email.png";
import InstaIcon from "../assets/images/icons/insta.svg";
import FbIcon from "../assets/images/icons/fb.svg";
import TwitterIcon from "../assets/images/icons/twiter.svg";
import PintrestIcon from "../assets/images/icons/pintrest.svg";
import Logo from "../assets/images/Logo_christmas.png";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, Modal, ModalBody, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "../UI_components/Button";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSearch = () => setSearchOpen(!searchOpen);

    return (
        <header>
            <div className="header_top_bar">
                <span>
                    <img src={EmailIcon} alt="Email icon" loading="lazy" />
                    <span className="d-none d-sm-block">  www.registerkaro.in </span>
                </span>
                <span>
                    <img src={PhoneIcon} alt="phone icon" />
                    <span className="d-none d-sm-block">  +918447746183 </span>
                </span>
                <span>
                    <Link to='https://www.instagram.com/' target="_blank">   <img src={InstaIcon} alt="Instagram icon" /></Link>
                    <Link to='https://www.facebook.com/' target="_blank">  <img src={FbIcon} alt="Facebook icon" /></Link>
                    <Link to='https://x.com/' target="_blank">  <img src={TwitterIcon} alt="Twitter icon" /></Link>
                    <Link to='https://in.pinterest.com/' target="_blank">  <img src={PintrestIcon} alt="Pintrest icon" /></Link>
                </span>
            </div>
            <div className="header-section">
                <Navbar expand="lg" className="w-100">
                    <NavbarBrand href="/" >
                        <img src={Logo} alt="Logo" className="logo" />
                    </NavbarBrand>
                    <div className="d-lg-none">
                        <Button color={"transparent"} arialabel={"search button"}  textcolor={"var(--blue-color)"} fs={"var(--fs-24px)"} onClick={toggleSearch} icon={<FiSearch />} />
                        <Button color={"transparent"}  arialabel={"menu button"} textcolor={"var(--blue-color)"} fs={"var(--fs-24px)"} onClick={toggleMenu} icon={<RiMenu3Line />} />
                    </div>

                    <Collapse isOpen={isOpen} navbar className="d-lg-flex justify-content-end">
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/services">Our Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About Us</NavLink>
                            </NavItem>
                            <NavItem className="d-none d-md-block">
                                <Button color={"transparent"} textcolor={"var(--blue-color)"} fs={"var(--fs-24px)"} onClick={toggleSearch} icon={<FiSearch />} />
                            </NavItem>
                            <NavItem>
                                <Button color={"var(--primary-color)"} fw={"var(--fw-700)"} textcolor={"var(--white-color)"} text={"Talk An Expert"} />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Modal isOpen={searchOpen} toggle={toggleSearch} className="search-modal">
                    <ModalBody>
                        <Input type="text" placeholder="Search..." />
                        <Button color="secondary" className="mt-2" onClick={toggleSearch}>
                            Close
                        </Button>
                    </ModalBody>
                </Modal>
            </div>

        </header>
    )
}
