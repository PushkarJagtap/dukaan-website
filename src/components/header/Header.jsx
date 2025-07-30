import './header.css'
function Header(){
    return(
        <header>
                <div className="header-left">
                <img src="/logo.svg"></img>
                 <h1>
                 <ul><a href='/'>Products</a></ul>
                    <ul><a href='/'>Company</a></ul>
                   <ul><a href='/'>Resources</a></ul>
                   <ul><a href='/'>Pricing</a></ul></h1>                   
            </div>
            <div className="header-right">
                <h1>
                
                    <a href='/'>Sign in</a>
                    <a href='/'>Start Free</a>
                </h1>
            </div>
        </header>
    )
}
export default Header;