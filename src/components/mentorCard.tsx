import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Box,
  Container,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import Verified from "@mui/icons-material/Verified";
import LanguageIcon from "@mui/icons-material/Language";
import Image2 from "../assets/images/image.png";
import Image1 from "../assets/images/unsplash_mEZ3PoFGs_k.png";
import Image3 from "../assets/images/unsplash_mEZ3PoFGs_k.png";

interface SessionDetails {
  title: string;
  subtitle: string;
  duration: string;
  amount: string;
}
interface MentorCardProps {
  name: string;
  category: string;
  profileImage: string;
  expertise: string[];
  industries: string[];
  details: string;
  profession: string;
  language: string[];
  session: SessionDetails[];
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  category,
  profileImage,
  details,
  profession,
  language,
  expertise,
  session,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <Card className="m-4 p-4">
      <Container className="flex justify-between items-start ">
        <Box className="flex flex-col items-center mr-6">
          <img
            src={profileImage}
            alt={`${name} profile`}
            className="rounded-full w-[120px] h-[120px] object-cover mb-2"
          />
          <Box className="text-center mt-2">
            <Typography className="font-bold flex items-center" variant="h6">
              <StarRateIcon style={{ color: "#4E54C6", marginRight: "4px" }} />
              4.5 Ratings
            </Typography>
            <Typography variant="body2">62 Reviews / 47 Sessions</Typography>
          </Box>
        </Box>

        <Box sx={{ width: "40%" }}>
          <Box>
            <Typography variant="h4" className="flex items-center font-bold">
              {name}
              <Verified className="ml-2 text-blue-700" />
            </Typography>
            <Box className="flex items-center justify-between lg:w-[50%] w-[80%] my-1">
              <Typography variant="body2">{category}</Typography>
              <Typography className="flex items-center" variant="body2">
                <LanguageIcon fontSize="small" />
                <span className="ml-1">{language.join(", ")}</span>
              </Typography>
            </Box>
            <Typography variant="body1" className="font-medium mt-1">
              {profession}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              {details}
            </Typography>
          </Box>

          <Box mt={2}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              TabIndicatorProps={{ style: { display: "none" } }}
              className="border-2 rounded-full text-[#4E54C6]  "
            >
              <Tab
                label="Expertise"
                sx={{
                  backgroundColor: activeTab === 0 ? "#EEEFFF" : "transparent",
                  borderRadius: 10,
                  padding: "8px 16px",
                }}
              />
              <Tab
                label="Industries"
                sx={{
                  backgroundColor: activeTab === 1 ? "#EEEFFF" : "transparent",
                  borderRadius: 10,
                  padding: "4px 16px",
                }}
              />
              <Tab
                label="Stages"
                sx={{
                  backgroundColor: activeTab === 2 ? "#EEEFFF" : "transparent",
                  borderRadius: 2,
                  padding: "8px 16px",
                }}
              />
            </Tabs>

            <Box mt={2}>
              {activeTab === 0 &&
                expertise.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    component="span"
                  >
                    {item}
                    {index < expertise.length - 1 && " • "}
                  </Typography>
                ))}
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Box>
          {session.map((item, index) => (
            <Box key={index}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.title}
              </Typography>
              <Box my={1}>
                <Typography variant="body2" fontWeight={"bold"}>
                  • {item.subtitle}
                </Typography>

                <Box className="flex gap-10 p-2 ">
                  <Typography variant="body2">{item.duration}</Typography>
                  <Typography variant="body2" fontWeight="bold" color="gray">
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box my={1}>
                <Typography variant="body2" fontWeight={"bold"}>
                  {" "}
                  • {item.subtitle}
                </Typography>
                <Box className="flex gap-10 p-2 ">
                  <Typography variant="body2">{item.duration} </Typography>
                  <Typography variant="body2" fontWeight="bold" color="gray">
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#4E54C6",
                  color: "white",
                  marginTop: 10,
                  borderRadius: 10,
                }}
                className="bg-[#4E54C6]  "
              >
                Follow
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Card>
  );
};

export default MentorCard;
