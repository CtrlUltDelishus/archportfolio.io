// NotableSkills.js
import React from 'react';
import { Heading, Box, UnorderedList, ListItem, Flex, Progress } from '@chakra-ui/react';

const NotableSkills = () => {
  const skills = [
    { skill: 'Greek', proficiency: 100},
    { skill: 'English', proficiency: 100 },
    { skill: 'Serbian', proficiency: 100},
    { skill: 'AutoCAD 2025', proficiency: 100 },
    { skill: 'Photoshop 2024', proficiency: 100},
    { skill: 'Sketchup 2024 Pro', proficiency: 100 },
    { skill: 'Lumion 2023', proficiency: 100 },
    { skill: 'Illustrator 2024', proficiency: 60 },
    { skill: 'ArchiCAD 26', proficiency: 50 },
    { skill: 'Rhino 8', proficiency: 40 },
    { skill: 'Blender 4.2', proficiency: 50 },
    { skill: 'Web Development', proficiency: 40 },
    { skill: 'Premiere Pro 2024 / Video Editing ', proficiency: 80 },

  ];

  return (
    <div>
      <Heading as="h3" variant="section-title">
        Notable Skills
      </Heading>
      <Box mb={4}>
        <UnorderedList>
          {skills.map((item, index) => (
            <ListItem key={index} mb={2}>
              <Flex justify="space-between">
                {item.skill}
                <Box>{item.proficiency}%</Box>
              </Flex>
              <Progress value={item.proficiency} size="sm" colorScheme="gray" />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
};

export default NotableSkills;
