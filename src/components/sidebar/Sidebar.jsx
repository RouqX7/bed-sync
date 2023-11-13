import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Bed Sync</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <p className="title">LISTS</p>
          </li>
        </ul>
        <ul>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li>
            <p className="title">Management</p>
          </li>
          <li>
            <ApartmentIcon className="icon" />
            <span>Ward </span>
          </li>
        </ul>
        <ul>
          <li>
            <LocalHotelIcon className="icon" />
            <span>Bed </span>
          </li>
        </ul>
        <ul>
          <li>
            <Diversity3OutlinedIcon className="icon" />
            <span>Patient </span>
          </li>
        </ul>
        <ul>
          <li>
            <GroupAddOutlinedIcon className="icon" />
            <span>Staff </span>
          </li>
        </ul>
        <ul>
          <li>
            <p className="title">Service</p>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <ul>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
