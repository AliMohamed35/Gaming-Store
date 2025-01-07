import './footer.css'

export default function Footer() {
    return <>
        <footer>
            <div className="container1">
                <div className="column">
                    <h4>SOLUTIONS</h4>
                    <p>Explainable Ai</p>
                    <p>ML monitoring</p>
                </div>
                <div className="column">
                    <h4>USE CASES</h4>
                    <p>Fraud</p>
                    <p>Churn detection</p>
                    <p>Under writing</p>
                </div>
                <div className="column">
                    <h4>Resources</h4>
                    <p>Resource hub</p>
                    <p>Blog</p>
                    <p>Learn more</p>
                </div>
                <div className="column sub">
                    <h4>SUBSCRIBE</h4>
                    <input type="text" />
                    <input type="text" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="container2">
                <div className="info">
                    <span>@Ali Mohamed - 2024</span>
                </div>

                <div className="links">
                    <a href="#">linked</a>
                    <a href="#">insta</a>
                    <a href="#">github</a>
                    <a href="#">facebook</a></div>
            </div>
        </footer>
    </>
}