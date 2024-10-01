import { useState } from "react";
import { Grid, Container } from "@mui/material";
import Sidebar from "./sideBar";
import MentorCard from "./mentorCard";
import mockData from "../data/mentorData.json";

const MentorList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mentors, setMentors] = useState(mockData);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>

        {/* Mentor Cards */}
        <Grid item xs={12} md={9}>
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              category={mentor.category}
              profileImage={mentor.profileImage}
              expertise={mentor.expertise}
              industries={mentor.industries}
              stages={mentor.stages}
              location={mentor.location}
              language={mentor.language}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MentorList;
