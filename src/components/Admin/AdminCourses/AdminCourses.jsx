import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
//import CourseModal from './CourseModal';

import toast from 'react-hot-toast';
import CourseModal from './CourseModal';


const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courses=[{
   _id:"asnskakklsfksldks",
   title:"React Course",
   category:"Web Development",
   poster:{
    url:"active",
   },
   createBy:"Rohan",
   views:123,
   numOfVideos:12,
  },
]
const coureDetailsHandler = userId => {
onOpen();
};
const deleteButtonHandler = userId => {
  console.log(userId);
};
const deleteLectureButtonHandler=(courseId, lectureId) => {
   console.log(courseId);
   console.log(lectureId);
}
const addLectureHandler=(e, courseId, title, description, video)=>{
   e.preventDefault();
}
  return (
    <Grid
    css={{
      cursor: `url(${cursor}), default`,
    }}
    minH={'100vh'}
    templateColumns={['1fr', '5fr 1fr']}
  >
    <Box p={['0', '8']} overflowX="auto">
      <Heading
        textTransform={'uppercase'}
        children="All Users"
        my="16"
        textAlign={['center', 'left']}
      />

      <TableContainer w={['100vw', 'full']}>
        <Table variant={'simple'} size="lg">
          <TableCaption>All available courses in the database</TableCaption>

          <Thead>
            <Tr>
            <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
            </Tr>
          </Thead>

          <Tbody>
            {courses &&
             courses.map(item => (
                <Row
                  coureDetailsHandler={coureDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                 // loading={loading}
                />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <CourseModal  isOpen={isOpen}
          onClose={onClose}
          id="njlldkl"
          courseTitle="React Course"
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          />
    </Box>

    <Sidebar />
  </Grid>
  )
}



function Row({ item ,coureDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
      <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
        <Button
            onClick={() => coureDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
            //isLoading={loading}
          >
            View Lectures
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
            //isLoading={loading}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses