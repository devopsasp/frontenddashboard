// Layoutcomp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ServiceCard from "./servicecard.js";
import SearchFilter from "./searchfilter.js";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

function Layoutcomp() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Sample data for cards
  const cardsData = [
    {
      title: "Attendance Entry",
      icon: <AccountBoxIcon />,
      onClick: () => navigate("/calendar"),
    },
    {
      title: "Medical Claim",
      icon: <LocalHospitalIcon />,
      onClick: () => navigate("/medical"),
    },
    {
      title: "Esi Slip",
      icon: <AddBusinessIcon />,
      onClick: () => navigate("/esi"),
    },
    {
      title: "Resignation Slip",
      icon: <PersonRemoveIcon />,
      onClick: () => navigate("/resignation"),
    },
    {
      title: "Employee DashBoard",
      icon: <AddBusinessIcon />,
      onClick: () => navigate("/dashboard"),
    },
  ];

  // Filtering function
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <SearchFilter value={searchQuery} onChange={handleSearch} />
      <br />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredCards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Layoutcomp;
