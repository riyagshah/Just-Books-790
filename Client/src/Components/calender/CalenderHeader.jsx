import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Search2Icon,
  SunIcon,
  AddIcon,
  TriangleDownIcon
} from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Center, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Link } from "react-router-dom";
 
 
import { BiTask } from "react-icons/bi";

import { FiSmile } from "react-icons/fi";
const CalenderHeader = () => {
  

  const [isDay, setIsDay] = useState(false);
  const [isWeek, setIsWeek] = useState(false);
  const [isMonth, setIsMonth] = useState(false);

  const handleClickDay = () => {
    setIsMonth(false)  
    setIsDay(true);
    setIsWeek(false);
  };
 const handleClickWeek = () => {
  setIsMonth(false)  
  setIsDay(false);
  setIsWeek(true);
 };
const handleClickMonth = () => {
    
  setIsMonth(true)
  setIsDay(false);
  setIsWeek(false);


  };


  return (
    <Box>
      <Flex
        bgColor="#f7f7f7"
        padding={"15px 5px"}
        justifyContent="space-between"
      >
        <Box display={"flex"}   w="15rem" >

        <Link to="/day">
          <Button bg="white" borderRadius={"none"}  style={{
          backgroundColor: isDay ? '#44505e' : '',
          color:isDay? "white" :"",
          
        }} onClick={handleClickDay} variant='outline'>day</Button>
        </Link>
        <Link to="/week">
          <Button bg="white" borderRadius={"none"} style={{
          backgroundColor: isWeek ? '#44505e' : '',
          color:isWeek? "white" :"",
          
        }}  onClick={handleClickWeek} variant='outline'>week</Button>
        </Link>
        <Link to="/month">
          <Button bg="white" borderRadius={"none"} style={{
          backgroundColor: isMonth ? '#44505e' : '',
          color:isMonth? "white" :"",
          
        }}  onClick={handleClickMonth}  variant='outline'>month</Button>
        </Link>
        </Box>

        
        <Box display={"flex"} justifyContent={"space-evenly"} w="30rem">
          

          <Box display={"flex"}>

          <Button  borderRadius={"none"} bg="#44505e" variant="none" color={"white"}>
            Solo
          </Button>
          <Button bg="white" borderRadius={"none"} border={"1px solid grey"}>
Company
          </Button>
          </Box>
          <Button bg="white" borderRadius={"none"} colorScheme={"black"} variant="outline">
            <FiSmile/>
            Me
            <TriangleDownIcon/>
          </Button>
          <Button  bg="white" borderRadius={"none"} colorScheme={"black"} variant="outline">
            <BiTask/>
        <TriangleDownIcon/>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CalenderHeader;
