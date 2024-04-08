import "./FooterStyle.css"

function Footer() {
  return (
    <footer>
        <div className="top">
            <div className="top-left">
                <h1>Trippy</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div className="social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <div className="bottom">
            <div className="col">
                <h3>Project</h3>
                <ul>
                    <li>Changelog</li>
                    <li>Status</li>
                    <li>Lisence</li>
                    <li>All Version</li>
                </ul>
            </div>
            <div className="col">
                <h3>Community</h3>
                <ul>
                    <li>Github</li>
                    <li>Issues</li>
                    <li>Project</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className="col">
                <h3>Help</h3>
                <ul>
                    <li>Support</li>
                    <li>Troubleshooting</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col">
                <h3>Others</h3>
                <ul>
                    <li>Term of Service</li>
                    <li>Privacy Policy</li>
                    <li>License</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
