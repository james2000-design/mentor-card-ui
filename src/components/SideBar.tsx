import { useState, Dispatch, SetStateAction } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  ListItemText,
  Card,
  Divider,
  SelectChangeEvent,
} from "@mui/material";

interface SideBarProps {
  setCategory: Dispatch<SetStateAction<string>>;
}

const SideBar = ({ setCategory }: SideBarProps) => {
  const [, setSelectedCategory] = useState<string>("");
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedCategory(value);
    setCategory(value);
  };

  const categories = ["Mentor", "Investor", "Cofounder"];
  const expertiseOptions = [
    "B2C Sales",
    "Growth Marketing",
    "Product Marketing",
  ];
  const industriesOptions = [
    "Administrative Service",
    "Education",
    "Manufacturing",
  ];
  const locations = ["Delhi", "Mumbai", "Chennai"];
  const counts = [
    { item: "2 and above" },
    { item: "3 and above" },
    { item: "4 and above" },
  ];

  const [showAllExpertise, setShowAllExpertise] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);

  return (
    <Card className="w-[100%] my-5 p-5 ">
      <Box className="py-2 text-[#4E54C6] text-2xl font-[Gentium, Book,Basic,mono]">
        Filter
      </Box>
      <Divider />

      <Box className="py-2">
        <Box className="flex justify-between items-center">
          <span className="font-bold">Category</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select</InputLabel>
          <Select label="Category" onChange={handleCategoryChange}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider />

      <Box className="my-2">
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Expertise</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <TextField label="Search" variant="outlined" />
          {(showAllExpertise
            ? expertiseOptions
            : expertiseOptions.slice(0, 3)
          ).map((option) => (
            <Box key={option} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={option} />
            </Box>
          ))}
          {expertiseOptions.length > 2 && (
            <Box
              className="text-gray-500 font-bold cursor-pointer ml-4"
              onClick={() => setShowAllExpertise(!showAllExpertise)}
            >
              {showAllExpertise ? "Show Less" : "See All"}
            </Box>
          )}
        </FormControl>
      </Box>
      <Divider />

      <Box>
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Industries</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <TextField label="Search" variant="outlined" />
          {(showAllIndustries
            ? industriesOptions
            : industriesOptions.slice(0, 3)
          ).map((option) => (
            <Box key={option} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={option} />
            </Box>
          ))}
          {industriesOptions.length > 2 && (
            <Box
              className="text-gray-500 font-bold cursor-pointer ml-4"
              onClick={() => setShowAllIndustries(!showAllIndustries)}
            >
              {showAllIndustries ? "Show Less" : "See All"}
            </Box>
          )}
        </FormControl>
      </Box>
      <Divider />

      <Box>
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Location</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <TextField label="Search" variant="outlined" />
          {(showAllLocations ? locations : locations.slice(0, 3)).map((loc) => (
            <Box key={loc} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={loc} />
            </Box>
          ))}
          {locations.length > 2 && (
            <Box
              className="text-gray-500 font-bold cursor-pointer ml-4"
              onClick={() => setShowAllLocations(!showAllLocations)}
            >
              {showAllLocations ? "Show Less" : "See All"}
            </Box>
          )}
        </FormControl>
      </Box>
      <Divider />

      <Box>
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Count</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          {counts.map((count) => (
            <Box key={count.item} display="flex" alignItems="center">
              <Checkbox />
              <StarRateIcon className="text-[#4E54C6] mr-2" />
              <ListItemText primary={count.item} />
            </Box>
          ))}
        </FormControl>
      </Box>

      <Box>
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Sort by</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select label="Relevance">
            <MenuItem>Relevance</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
};

export default SideBar;
