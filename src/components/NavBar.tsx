import { Box, Card, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../assets/images/logo.png";

interface NavBarProps {
  setSearchTerm: (term: string) => void;
}
const NavBar = ({ setSearchTerm }: NavBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Card className="  mx-2  p-2 flex lg:flex-nowrap flex-wrap  justify-center lg:justify-between ">
        <Box className=" flex gap-10 w-full items-center">
          <img src={logo} alt="" className="pb-2  cursor-pointer" />
          <Typography className="relative w-full border-none">
            <input
              type="text"
              className="bg-gray-200 border-2 outline-none border-none p-2 pl-10 rounded-full  lg:w-[50%] w-full "
              placeholder="Search"
              onChange={handleInputChange}
            />
            <SearchOutlinedIcon className="absolute left-2 top-1/2 -translate-y-1/2 opacity-100 transition focus:opacity-0 " />
          </Typography>
        </Box>

        <Box className="flex gap-10 items-center my-2 cursor-pointer">
          <Typography className=" text-center text-[#4E54C6] flex flex-col gap-2 items-center  ">
            <DashboardOutlinedIcon />
            <span className=" font-bold text-xs ">Home</span>
          </Typography>
          <Typography className="text-center text-[#4E54C6] flex flex-col gap-2 items-center">
            <InsertChartRoundedIcon />
            <span className=" font-bold text-xs ">Pitches</span>
          </Typography>
          <Typography className=" text-center text-[#4E54C6] flex flex-col gap-2 items-center ">
            <ContactEmergencyOutlinedIcon />
            <span className=" font-bold text-xs ">Mentor</span>
          </Typography>
          <Typography className=" text-center text-[#4E54C6] flex flex-col gap-2 items-center ">
            <MessageOutlinedIcon />
            <span className=" font-bold text-xs ">Message</span>
          </Typography>
          <Typography className=" text-center text-[#4E54C6] flex flex-col gap-2 items-center  ">
            <CircleNotificationsRoundedIcon />
            <span className=" font-bold text-xs  ">Notification</span>
          </Typography>
          <Typography className=" text-center text-[#4E54C6] flex flex-col gap-2 items-center ">
            <AccountCircleRoundedIcon />
            <span className=" font-bold text-xs ">Profile</span>
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default NavBar;
