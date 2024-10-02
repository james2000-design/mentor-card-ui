import { useState, useEffect } from "react";
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
interface MentorProps {
  searchTerm: string;
}

interface MentorListProps {
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

const MentorList = ({ searchTerm }: MentorProps) => {
  const [mentors, setMentors] = useState<MentorListProps[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<MentorListProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/mentor");
        setMentors(response.data);
        setLoading(false);
      } catch {
        setError("Failed to load mentor data");
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  useEffect(() => {
    let filtered = mentors;

    if (category) {
      filtered = filtered.filter((mentor) => mentor.category === category);
    }
    setFilteredMentors(filtered);
  }, [mentors, category]);

  useEffect(() => {
    const filteredMentor = mentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMentors(filteredMentor);
  }, [mentors, searchTerm]);

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
          <Sidebar setCategory={setCategory} />
        </Box>

        <Box>
          <Box className="flex justify-evenly items-center ">
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Enginering Mentor
            </Box>
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Design Mentor
            </Box>
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Startup Mentor
            </Box>
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Marketing Mentor
            </Box>
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Career Mentor
            </Box>
            <Box className=" border-2 border-gray-300 shadow-2xl rounded-full px-4 py-2  ">
              Top Mentors
            </Box>
          </Box>
          <Box>
            {filteredMentors?.map((mentor, index) => (
              <MentorCard
                key={index}
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
    </Box>
  );
};

export default MentorList;
