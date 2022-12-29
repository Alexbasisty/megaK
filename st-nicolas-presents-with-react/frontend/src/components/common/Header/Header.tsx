import { NavLink } from "react-router-dom";

const Header = () => {
    const linkColor = ({ isActive }: {
            isActive: boolean;
        }) => ({color: isActive ? 'green' : 'red'});
    
    return (
        <>
          <h1>Santa App</h1>
          <NavLink to={'/gift'} style={linkColor}>Go to Gifts</NavLink>
          <NavLink to={'/child'} style={linkColor}>Go to Children</NavLink>
          <hr />
        </>
    );
};

export default Header;