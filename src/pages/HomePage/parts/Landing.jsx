import React from "react";

//Assets
import landingBG from "../../../assets/Videos/LandingVideo.mp4";
import ".././HomePage.css";
import { Typography } from "@mui/material";
const Landing = () => {
    return (
        <>
            <div className="main">
                <video src={landingBG} autoPlay loop muted />
                <div className="content">
                    <div className="headLine">
                        <Typography
                            variant="h2"
                            style={{ textAlign: "center" }}
                            sx={{
                                fontSize: {
                                    xs: "16px",
                                    sm: "30px",
                                    md: "40px",
                                    lg: "60px",
                                },
                            }}
                        >
                            Ultimate Solitions For Your Business Dreams
                        </Typography>
                    </div>
                    <div className="landingContent">
                        <Typography
                            variant="h6"
                            style={{ textAlign: "center" }}
                            sx={{
                                fontSize: {
                                    xs: "10px",
                                    sm: "16px",
                                    md: "20px",
                                },
                            }}
                        >
                            Redline Believes Sustainable Business Are Resilient
                            And Can Create Economic Value, Healthy Ecosystems,
                            And Strong Communities. We Enable Business
                            Sustainability By Fostering Collaboration And
                            Co-Creating Knowledge Through Research And Practice.
                        </Typography>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    );
};

export default Landing;
