import '../Header/Header.css'
export default function Header() {
    return <>
        <nav>
            <div className="nav-items">
                <div className="logo">G-store</div>
                <div className="nav-links">
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Games</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}