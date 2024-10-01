import React from "react";
import { Card, Typography, Button, Box, Chip, Container } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

interface MentorCardProps {
  name: string;
  category: string;
  profileImage: string;
  expertise: string[];
  industries: string[];
  stages: string;
  location: string;
  language: string[];
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  category,
  profileImage,
  expertise,
  industries,
  stages,
  location,
  language,
}) => {
  return (
    <Card className="flex m-2 p-2 items-center">
      <Container>
        <Box className="flex flex-col ">
          <img src={profileImage} alt="" className="w-[100px]" />
          <Box className="flex flex-col items-center ">
            <span className="font-bold flex items-center">
              <StarRateIcon className="" />
              4.5 ratings
            </span>
            <span>62 Reviews/ 47 sessions</span>
          </Box>
        </Box>

        <div>
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle1">{category}</Typography>
            <Typography variant="body2">{language.join(", ")}</Typography>
            <Typography variant="body2">{location}</Typography>

            {/* Expertise Chips */}
            <Box mt={1}>
              <Chip label="Expertise" color="primary" size="small" />
              {expertise.map((exp) => (
                <Chip
                  key={exp}
                  label={exp}
                  variant="outlined"
                  size="small"
                  sx={{ margin: 0.5 }}
                />
              ))}
            </Box>

            {/* Industries and Stages */}
            <Box mt={1}>
              <Typography variant="body2">
                <strong>Industries: </strong>
                {industries.join(", ")}
              </Typography>
              <Typography variant="body2">
                <strong>Stages: </strong>
                {stages}
              </Typography>
            </Box>
          </Box>
        </div>

        {/* Booking Section */}
        <div>
          <Box textAlign="right">
            <Typography variant="body2">Book a Session</Typography>
            <Typography variant="body2">Introduction - 45 mins</Typography>
            <Typography variant="body2">₹ 299 per session</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
              Follow
            </Button>
          </Box>
        </div>
      </Container>
    </Card>
  );
};

export default MentorCard;
