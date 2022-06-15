import React, {useState,useEffect} from 'react';
import { Navbar, Nav, Container, InputGroup, Form } from 'react-bootstrap';

const ThemeSwitch = () => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")));

    useEffect(() => {
        document.documentElement.setAttribute('theme', isDark);
    }, []);

    return (
        <div className="form-switch">
            <label className="form-check-label" htmlFor="switchDarkMode"></label>
            <input className="form-check-input" type="checkbox" id="switchDarkMode" defaultChecked={isDark} onChange={() => { localStorage.setItem("theme", JSON.stringify(!isDark)); setIsDark(!isDark); document.documentElement.setAttribute('theme', !isDark) }} />
        </div>
    )
}

export default ThemeSwitch
