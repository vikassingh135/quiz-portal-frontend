import React, { useEffect, useState } from "react";
import MainWebsiteNavbar from "../MainWebsiteNavbar/MainWebsiteNavbar";
import { Typography } from "@mui/material";
import PrintGuides from "../../../templates/PrintTableMain/PrintTableMain";
import "./Guides.css";
import { getAllStudyMaterials, getBooksBySem, getStudyMaterialsBytype } from "../../../apis/admin/adminApi";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Guides = () => {

  const params = useParams();

  const year = params.year;
  const type = params.type;
  console.log(params,year,type)

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    getStudyMaterialsBytype({year,type}).then((response) => {
      if (response.error) {
        console.error(response.error);
      }
      setGuides(response);
      console.log(response, guides);
    });
  }, []);

  console.log(guides);

  return (
    <div>
      <MainWebsiteNavbar />
      <div>
        <Typography variant="h2">Books / Guides for B.Tech {year} Year</Typography>
      </div>
      <div className="guides">
        <PrintGuides guides = {guides}/>
        </div>
        <Footer />
    </div>
  );
};

export default Guides;
