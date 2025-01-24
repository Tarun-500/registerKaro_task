import { useState, useRef, useEffect } from "react";
import PhoneIcon from "../assets/images/icons/phone.png";
import EmailIcon from "../assets/images/icons/email.png";
import InstaIcon from "../assets/images/icons/insta.svg";
import FbIcon from "../assets/images/icons/fb.svg";
import TwitterIcon from "../assets/images/icons/twiter.svg";
import PintrestIcon from "../assets/images/icons/pintrest.svg";
import Logo from "../assets/images/Logo_christmas.png";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "../UI_components/Button";
import { SearchIcon, MenuIcon } from "../data/icons";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const searchRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSearch = (e) => {
        e.stopPropagation();
        setSearchOpen((prevState) => !prevState);
    };
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="header_top_bar">
                <span>
                    <img src={EmailIcon} alt="Email icon" loading="lazy" />
                    <span className="d-none d-sm-block">www.registerkaro.in</span>
                </span>
                <span>
                    <img src={PhoneIcon} alt="phone icon" />
                    <span className="d-none d-sm-block">+918447746183</span>
                </span>
                <span>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={InstaIcon} alt="Instagram icon" />
                    </Link>
                    <Link to="https://www.facebook.com/" target="_blank">
                        <img src={FbIcon} alt="Facebook icon" />
                    </Link>
                    <Link to="https://x.com/" target="_blank">
                        <img src={TwitterIcon} alt="Twitter icon" />
                    </Link>
                    <Link to="https://in.pinterest.com/" target="_blank">
                        <img src={PintrestIcon} alt="Pintrest icon" />
                    </Link>
                </span>
            </div>
            <div className="header-section">
                <Navbar expand="lg" className="w-100">
                    <NavbarBrand href="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </NavbarBrand>
                    <div className="d-lg-none">
                        <span className="position-relative">
                            <Button
                                color={"transparent"}
                                arialabel={"search button"}
                                textcolor={"var(--blue-color)"}
                                fs={"var(--fs-24px)"}
                                onClick={toggleSearch}
                                icon={<SearchIcon />}
                            />
                            {searchOpen && (
                                <div ref={searchRef} className="searchbox">
                                    <Input type="search" placeholder="Search..." />
                                </div>
                            )}
                        </span>
                        <Button
                            color={"transparent"}
                            arialabel={"menu button"}
                            textcolor={"var(--blue-color)"}
                            fs={"var(--fs-24px)"}
                            onClick={toggleMenu}
                            icon={<MenuIcon />}
                        />
                    </div>

                    <Collapse isOpen={isOpen} navbar className="d-lg-flex justify-content-end">
                        <Nav navbar>
                            {/* Home */}
                            <NavItem className="my-auto">
                                <NavLink to="/" tag={Link}>
                                    Home
                                </NavLink>
                            </NavItem>

                            {/* Our Services Dropdown */}
                            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown} className="my-auto">
                                <DropdownToggle nav caret>
                                    Our Services
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag={Link} to="/services/option1">
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/services/option2">
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/services/option3">
                                        Option 3
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            {/* Blog */}
                            <NavItem className="my-auto">
                                <NavLink to="/blog" tag={Link}>
                                    Blog
                                </NavLink>
                            </NavItem>

                            {/* Contact Us */}
                            <NavItem className="my-auto">
                                <NavLink to="/contact" tag={Link}>
                                    Contact Us
                                </NavLink>
                            </NavItem>

                            {/* About Us */}
                            <NavItem className="my-auto">
                                <NavLink to="/about" tag={Link}>
                                    About Us
                                </NavLink>
                            </NavItem>

                            {/* Search */}
                            <NavItem className="d-none d-lg-block position-relative">
                                <Button
                                    color={"transparent"}
                                    textcolor={"var(--blue-color)"}
                                    fs={"var(--fs-24px)"}
                                    onClick={toggleSearch}
                                    icon={<SearchIcon />}
                                />
                                {searchOpen && (
                                    <div ref={searchRef} className="searchbox">
                                        <Input type="search" placeholder="Search..." />
                                    </div>
                                )}
                            </NavItem>

                            {/* Talk to Expert */}
                            <NavItem>
                                <Button
                                    color={"var(--primary-color)"}
                                    fw={"var(--fw-700)"}
                                    textcolor={"var(--white-color)"}
                                    text={"Talk An Expert"}
                                />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
}
