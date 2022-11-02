const Footer = () => {
    return (
        <footer className="page-footer light-blue darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Created by qasimis
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/qasimiss/react-showcase/tree/master"
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
