import * as React from "react";

// Components
import {
    Container,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    CardActionArea,
} from "@mui/material";

// Images
import image1 from "../../../assets/images/client-focus.jpeg";
import image2 from "../../../assets/images/innovation.jpeg";
import image3 from "../../../assets/images/economy.jpg";
import image4 from "../../../assets/images/core-values.jpg";
import image5 from "../../../assets/images/e-s.jpg";
import image6 from "../../../assets/images/honest.jpg";

// Mock
const Cards = [
    {
        image: image1,
        title: "Client Focus",
        description:
            "We always deliver on our promise and only assure what can we deliver because we understand customers' expectations and take steps to exceed them. Consequently, it is our responsibility to ensure total customer satisfaction and overcome shortcomings.",
    },
    {
        image: image2,
        title: "Innovation",
        description:
            "We differentiate ourselves by helping our clients and partners achieve their goalmouths, using the most advanced innovative solutions.",
    },
    {
        image: image3,
        title: "Economy",
        description:
            "Economic sustainability involves creating economic value out of whatever project our decision we are undertaking. Decisions are made in the most equitable and fiscally sound way possible while considering the order aspects of sustainability. In most cases, Our projects and decisions are made with the long-term benefits in mind.",
    },
    {
        image: image4,
        title: "Corporate Values",
        description:
            "Our team of experts ensures excellent results in a professional and timely manner. We pride ourselves on our ethical and respectable methods of business.",
    },
    {
        image: image5,
        title: "Environment & Society",
        description:
            "We take great care to respect the environment, protect human health, ensure product and facility safety, and promote social and economic development in our host countries.",
    },
    {
        image: image6,
        title: "Honest Partnership",
        description:
            "Honest business practices inspire staff and customers with respect for your mission. 6 Honest business practices build foundations of trust with colleagues, competitors, staff, customers and every other individual and entity.",
    },
];

const CardsContainer = () => {
    return (
        <Container maxWidth="xl">
            <Grid container justifyContent="center">
                {Cards.map((card) => (
                    <Grid key={card.title}>
                        <Card sx={{ maxWidth: 445, margin: "10px" }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 170 }}
                                    image={card.image}
                                    title="green iguana"
                                />
                                <CardContent sx={{ height: 190 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default CardsContainer;
