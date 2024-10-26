import './NavBar.scss'


export function NavBar() {
    return (
        <div className='nav-bar'>
            <div>
            <h1 className='logo-container'>Tech E-commerce</h1>
            </div>
            <div className='nav-links-container'>
                <a href="#" className='nav-link'>INÍCIO</a>
                <a href="#" className='nav-link'>OFERTAS</a>
                <a href="#" className='nav-link'>BLACK FRIDAY</a>
                <a href="#" className='nav-link'>LOGIN</a>
            </div>
        </div>
    )
}