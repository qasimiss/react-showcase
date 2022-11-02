const Header = () => {
    return (
        <header>
            <nav className="light-blue darken-4">
                <div className="nav-wrapper">
                    <a
                        href="https://qasimiss.github.io/react-showcase/"
                        className="brand-logo"
                    >
                        React ShowCase
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/qasimiss/react-showcase/tree/master">
                                Repository
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
