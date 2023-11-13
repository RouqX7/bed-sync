import './Home.css'
import MenuButton from '../components/Home/MenuBotton';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="ward-selector">General Ward</div>
        </div>
    );
}

function Home() {
    return (
           <div className="home-container">
           <Link>
            <Navbar />
            <div className="menu-grid">
                <MenuButton icon="👤" label="Registration" />
                <MenuButton icon="📋" label="Programs" />
                <MenuButton icon="🌡️" label="Clinical" />
                <MenuButton icon= "/images/bedIcon.png" label= "Bed Management" to="/ward-management" />
            </div>
           </Link>
            
        </div>
      
    );
}


export default Home;
