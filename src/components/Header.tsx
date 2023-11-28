import logo from '../assets/logo.png';

export const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="Logo" height='50' />
            <div className="header__title">
                Comments
            </div>
        </div>
    );
}