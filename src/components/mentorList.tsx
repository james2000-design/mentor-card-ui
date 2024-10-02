import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import Sidebar from "./SideBar";
import MentorCard from "./mentorCard";

interface SessionDetails {
  title: string;
  subtitle: string;
  duration: string;
  amount: string;
}

interface Mentor {
  id: number;
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

const MentorList: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/mentor");
        console.log(response, "this is the data");
        setMentors(response.data);
        setLoading(false);
      } catch {
        setError("Failed to load mentor data");
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="w-full">
      <Box className="flex lg:flex-nowrap md:flex-nowrap flex-wrap w-full p-6">
        <Box className="lg:w-[20%] w-full ">
          <Sidebar />
        </Box>

        <Box className=" ">
          {mentors?.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              category={mentor.category}
              profileImage={mentor.profileImage}
              expertise={mentor.expertise}
              industries={mentor.industries}
              profession={mentor.profession}
              details={mentor.details}
              language={mentor.language}
              session={mentor.session}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MentorList;
