// src/components/SearchForm.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

interface FormValues {
  category: string;
}

const SearchForm = () => {
  // Form state management
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    expertise: "",
    industries: "",
    location: "",
    language: "",
  });

  // Handle form field changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const name = e.target.name as keyof FormValues;
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Filter criteria:", formValues);
    // Use formValues to filter or make API requests
  };

  return (
    <Box p={2} sx={{ border: "1px solid #ddd", borderRadius: "8px" }}>
      <Typography variant="h6" gutterBottom>
        Search & Filter Mentors
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        {/* Name Field */}
        <TextField
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />

        {/* Category Dropdown */}
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formValues.category}
            onChange={handleSelectChange}
            label="Category"
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="Mentor">Mentor</MenuItem>
            <MenuItem value="Investor">Investor</MenuItem>
            <MenuItem value="Cofounder">Cofounder</MenuItem>
          </Select>
        </FormControl>

        {/* Expertise Field */}
        <TextField
          label="Expertise"
          name="expertise"
          value={formValues.expertise}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />

        {/* Industries Field */}
        <TextField
          label="Industries"
          name="industries"
          value={formValues.industries}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />

        {/* Location Field */}
        <TextField
          label="Location"
          name="location"
          value={formValues.location}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />

        {/* Language Field */}
        <TextField
          label="Language"
          name="language"
          value={formValues.language}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />

        {/* Search Button */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
