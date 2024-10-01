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
} from "@mui/material";
const categories = ["Mentor", "Investor", "Cofounder"];
const expertiseOptions = ["B2C Sales", "Growth Marketing", "Product Marketing"];
const industriesOptions = [
  "Administrative Service",
  "Education",
  "Manufacturing",
];
const locations = ["Delhi", "Mumbai", "Chennai"];

const SideBar = () => {
  const counts = [
    {
      item: "2 and above",
    },
    {
      item: "3 and above",
    },
    {
      item: "4 and above",
    },
  ];
  return (
    <Card className="w-[100%] my-5 p-5 ">
      <Box className="py-2 text-[#4E54C6] text-3xl  font-[Gentium, Book,Basic,mono]">
        Filter
      </Box>
      <Divider />
      <Box className="py-4">
        <Box className="flex justify-between items-center">
          <span className="font-bold">Category</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select</InputLabel>
          <Select label="Category">
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box className="my-4">
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Expertise</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          <TextField label="Search" variant="outlined" />
          {expertiseOptions.map((option) => (
            <Box key={option} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={option} />
            </Box>
          ))}
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
          {industriesOptions.map((option) => (
            <Box key={option} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={option} />
            </Box>
          ))}
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
          {locations.map((location) => (
            <Box key={location} display="flex" alignItems="center">
              <Checkbox />
              <ListItemText primary={location} />
            </Box>
          ))}
        </FormControl>
      </Box>
      <Divider />
      <Box>
        <Box className="flex justify-between pt-4 items-center">
          <span className="font-bold">Location</span>
          <ExpandMoreIcon />
        </Box>
        <FormControl fullWidth margin="normal">
          {counts.map((count) => (
            <Box display="flex" alignItems="center">
              <Checkbox />
              <StarRateIcon className="text-[#4E54C6] mr-2 " />
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
            <MenuItem>Sort by</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Card>
  );
};

export default SideBar;
