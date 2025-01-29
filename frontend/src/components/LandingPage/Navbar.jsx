/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      path: "/manufacturer/dashboard",
    },
    {
      text: "Producers",
      icon: <InfoIcon />,
      path: "/producers/dashboard",
    },
    {
      text: "Retailers",
      icon: <PhoneRoundedIcon />,
      path: "/retailer/dashboard",
    },
  ];
  return (
    <nav className="navi">
      <div className="nav-logo-container">
        <h1 className="logoo text-xl ">Nirmaan Gati</h1>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <NavLink key={item.text} to={item.path}>
            {item.text}
          </NavLink>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
