import React, { useState } from "react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import leftArrow from "../Images/Back_Arrow.png";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const itemNames = [
    { label: "Vendor Details", value: 1 },
    { label: "Invoice Details", value: 2 },
    { label: "Comments", value: 3 },
  ];
  const [selectedItem, setSelectedItem] = useState(1);

  const handleChange = (event, newValue) => {
    setSelectedItem(newValue); // Use the newValue directly
  };
  const onLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div className={styles.headersContainer}>
      <div className={styles.backButton}>
        <img src={leftArrow} alt="arrow" />
        Create New Invoice
      </div>
      <div className={styles.MenuBar}>
        <div>
          <Box
            //   sx={{ borderBottom: 1, borderColor: "divider" }}
            sx={{
              // borderBottom: 1,
              // borderColor: "divider",
              overflowX: "auto", // Allow horizontal scrolling if the tabs overflow
              padding: { xs: 1, sm: 2 }, // Adjust padding for smaller screens
              maxWidth: "100%", // Prevent box from exceeding the container's width
            }}
          >
            <Tabs
              value={selectedItem}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable" // Enable scrolling behavior for tabs
              scrollButtons="auto" // Show scroll buttons on smaller screens
              allowScrollButtonsMobile // Ensure buttons appear on mobile
            >
              {itemNames.map((e) => {
                return <Tab key={e.value} label={e.label} value={e.value} />;
              })}
            </Tabs>
          </Box>
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={onLogout}
          sx={{
            maxHeight: { xs: "40px", sm: "40px", md: "40px" }, // Adjust for breakpoints
            width: "80%", // Optional: Make it stretch horizontally
          }}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Header;
