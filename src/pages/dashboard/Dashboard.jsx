/** @format */

import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Header from "../../components/header/Header.jsx";
import { tokens } from "../../theme";
import StatBox from "../../components/statBox/StatBox.jsx";
import ProgressCircle from "../../components/progresscircle/ProgressCircle.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [covidData, setCovidData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Country");

  const fetchAPIData = () => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "X-RapidAPI-Key": "cc7b611738msh78ba9de4f9d5625p16525djsnddfb71f29c46",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        const apiData = response.data.response;
        setCovidData(apiData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchAPIData, []);

  const getCountry = () => {
    let country = [];
    covidData.forEach((item) => {
      country.push(item.country);
    });
    country.sort();
    setCountryList(country);
  };

  useEffect(getCountry, [covidData]);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const loadCountryDropdown = () => {
    let country = [];
    covidData.forEach((item) => {
      country.push(item.country);
    });
    country.sort();
    setCountryList(country);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          {/* <InputLabel>Country</InputLabel> */}
          <Select
            id="demo-simple-select"
            value={selectedCountry}
            label="Country"
            onChange={handleChange}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <MenuItem value={selectedCountry}>Country</MenuItem>
            {/* {loadCountryDropdown} */}
            {countryList.length > 200 &&
              countryList.map((country, index) => {
                return (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
      </Box>

      {/* GRID & CHARTS */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.3"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,324"
            subtitle="Traffic Inbound"
            progress="0.8"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
