import { Link, Outlet } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <nav className="main-nav">
        <div>
        <img 
        height={80}
        width={200}
        src="https://www.bing.com/th?id=OIP.kPmysiepDeBl7v7GFPdgvwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"></img>
        </div>
        <div>
          <ul className="ul-nav">
            <li className="li-nav">
              <Link to="/">Pokemon</Link>
            </li>
            <li className="li-nav">
              <Link to="/flags">Banderas</Link>
            </li>
            <li className="li-nav">
              <Link to="/youtube">Youtube</Link>
            </li>
            <li className="li-nav">
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Esto va recibir los componentes hijos */}
      <Outlet />
    </div>
  );
};
export default Main;