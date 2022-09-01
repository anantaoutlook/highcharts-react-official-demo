import logo from './logo.svg';
import './App.css';

import React from 'react'
import { SimpleGrid, Box } from "@chakra-ui/react";

// @ts-ignore
import HighChartsMaster from './code/high_chart_master.tsx';

function App() {
  return (
    <div className="App">

        <SimpleGrid columns={1} spacing={10}>
          <Box borderWidth="1px" rounded="lg" p={4} m={4}>
               <HighChartsMaster chartType='Stackchart'/>
          </Box>
          </SimpleGrid>
          </div>
       
  );
}

export default App;
