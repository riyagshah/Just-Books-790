import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteProjtes, getProjets } from "../Redux/AppReducer/action";
import { BsFillBagFill } from "react-icons/bs";
import { EditProjects } from "./EditProjects";

const ProjectCard = ({ projects }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    console.log("delete:", id);
    dispatch(deleteProjtes(id)).then((res) => {
      dispatch(getProjets());
    });
  };

  const handleEdit = () => {
    console.log("handleedit");
  };

  const handleStatus = (e) => {
    const payload = {
      projectStatus: "Complete",
    };
  };

  console.log(projects);
  return (
    <Flex
      w="90%"
      justifyContent="space-between"
      margin="auto"
      alignItems="center"
    >

        <Stack gap="-50px">
          <Text marginBottom="-10px">{projects.projectname}</Text>
          <Text color="gray">{projects.clientname}</Text>
        </Stack>
 
      <Menu w="400px">
        <MenuButton>....</MenuButton>
        <MenuList>
          <Flex
            direction="column"
            justifyContent="flex-start"
            textAlign="start"
            marginLeft="16px"
          >
            <Box>
              <input
                type="checkbox"
                onChange={() => handleStatus(projects._id)}
              />
              {"  "}
              <label>{projects.projectStatus}</label>
            </Box>

            <p onClick={handleEdit}><EditProjects project={projects} /></p>
            <p onClick={() => handleClick(projects._id)}>Delete</p>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;
