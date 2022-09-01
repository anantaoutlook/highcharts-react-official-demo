import React from 'react'
import Highcharts from 'highcharts'
import bellhighchartsBellcurve from 'highcharts/modules/histogram-bellcurve'
import HighchartsReact from 'highcharts-react-official'
import { Row, Col, Button } from 'react-bootstrap';

bellhighchartsBellcurve(Highcharts);

export default function BellCurve() {

  const [graphData, setGraphData] = React.useState<number[]>([]);
  const [zonesData, setZonesData] = React.useState<any[]>([]);

  let num_Entry_010, num_Entry_025, num_Entry_075, num_Entry_090, num_Entry_mid ;
  let num_Mid_010, num_Mid_025, num_Mid_075, num_Mid_090, num_Mid_mid ;
  let num_Sen_010, num_Sen_025, num_Sen_075, num_Sen_090, num_Sen_mid ;
  
  let sum_entry = 0;
  let sum_mid = 0;
  let sum_senior = 0;

  React.useEffect(() => {
     getData()
  }, []);

  React.useEffect(() => {
    getData()
 });

  const getData = async () => {
    await fetch(' https://core-dev.mployeradvisor.com/system/GetInsightsAnalyticsSalary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        "Occupation": "Bakers",
	    "MetroArea": "Abilene, TX"
      })
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
        console.log(response);

      response.forEach((element: any) => {

          if(element.finalLevel === "Entry Level")
          {
              num_Entry_010 = parseFloat(element.num010.replace(",",".")).toFixed(2);
              num_Entry_025 = parseFloat(element.num025.replace(",",".")).toFixed(2);
              num_Entry_075 = parseFloat(element.num075.replace(",",".")).toFixed(2);
              num_Entry_090 = parseFloat(element.num090.replace(",",".")).toFixed(2);
              num_Entry_mid = parseFloat(element.numMid.replace(",",".")).toFixed(2);

            // sum_entry = num_Entry_010 + num_Entry_025 + num_Entry_075 + num_Entry_090 + num_Entry_mid;

            // console.log(sum_entry)
             
          }
          else if(element.finalLevel === "Mid Level")
          {
             num_Mid_010 = parseFloat(element.num010.replace(",",".")).toFixed(2);
             num_Mid_025 = parseFloat(element.num025.replace(",",".")).toFixed(2);
             num_Mid_075 = parseFloat(element.num075.replace(",",".")).toFixed(2);
             num_Mid_090 = parseFloat(element.num090.replace(",",".")).toFixed(2);
             num_Mid_mid = parseFloat(element.numMid.replace(",",".")).toFixed(2);

           // sum_mid = num_Mid_010 + num_Mid_025 + num_Mid_075 + num_Mid_090 + num_Mid_mid;
            
           // console.log(sum_mid);
          }
          else if(element.finalLevel === "Senior Level")
          {
             num_Sen_010 = parseFloat(element.num010.replace(",",".")).toFixed(2);
             num_Sen_025 = parseFloat(element.num025.replace(",",".")).toFixed(2);
             num_Sen_075 = parseFloat(element.num075.replace(",",".")).toFixed(2);
             num_Sen_090 = parseFloat(element.num090.replace(",",".")).toFixed(2);
             num_Sen_mid = parseFloat(element.numMid.replace(",",".")).toFixed(2);

            //sum_senior = num_Sen_010 + num_Sen_025 + num_Sen_075 + num_Sen_090 + num_Sen_mid;

            //console.log(sum_senior);
          }
          
      });
    });
  };


  const getGraphData = (param) => {

     if(param == "Entry")
     {
       

        let graphValues: number[] = [];
        graphValues.push(parseInt((num_Entry_010.replace(',',''))));
        graphValues.push(parseInt((num_Entry_025.replace(',',''))));
        graphValues.push(parseInt((num_Entry_mid.replace(',',''))));
        graphValues.push(parseInt((num_Entry_075.replace(',',''))));
        graphValues.push(parseInt((num_Entry_090.replace(',',''))));
        setGraphData(graphValues);
        console.log(graphValues);

        num_Entry_010 = parseInt(num_Entry_010);
        num_Entry_025 = parseInt(num_Entry_025);
        num_Entry_mid = parseInt(num_Entry_mid);
        num_Entry_075 = parseInt(num_Entry_075);
        num_Entry_090 = parseInt(num_Entry_090);

       
        sum_entry = num_Entry_010 + num_Entry_025 + num_Entry_075 + num_Entry_090 + num_Entry_mid;

        console.log(sum_entry);


        let zoneValues: any[] = [];
        // zoneValues.push({value: 0, color: '#191970'});
         zoneValues.push({value: num_Entry_010, color: '#000099'});
         zoneValues.push({value: num_Entry_025, color: '#4682B4'});
         zoneValues.push({value: num_Entry_mid, color: '#1434A4'});
         zoneValues.push({value: num_Entry_075, color: '#3F00FF'});
         zoneValues.push({value: num_Entry_090, color: '#1051FF'});
         zoneValues.push({value: sum_entry, color: '#000099'});
        setZonesData(zoneValues);
        console.log(zoneValues);

     }
    else if(param == "Mid")
    {
       
        let graphValues: number[] = [];
        graphValues.push(parseInt((num_Mid_010.replace(',',''))));
        graphValues.push(parseInt((num_Mid_025.replace(',',''))));
        graphValues.push(parseInt((num_Mid_mid.replace(',',''))));
        graphValues.push(parseInt((num_Mid_075.replace(',',''))));
        graphValues.push(parseInt((num_Mid_090.replace(',',''))));
        setGraphData(graphValues);
        console.log(graphValues);


        num_Mid_010 = parseInt(num_Mid_010);
        num_Mid_025 = parseInt(num_Mid_025);
        num_Mid_mid = parseInt(num_Mid_mid);
        num_Mid_075 = parseInt(num_Mid_075);
        num_Mid_090 = parseInt(num_Mid_090);

        sum_mid = num_Mid_010 + num_Mid_025 + num_Mid_075 + num_Mid_090 + num_Mid_mid;

        console.log(sum_mid);


        let zoneValues: any[] = [];
        // zoneValues.push({value: 0, color: '#191970'});
         zoneValues.push({value: num_Mid_010, color: '#000099'});
         zoneValues.push({value: num_Mid_025, color: '#4682B4'});
         zoneValues.push({value: num_Mid_mid, color: '#1434A4'});
         zoneValues.push({value: num_Mid_075, color: '#3F00FF'});
         zoneValues.push({value: num_Mid_090, color: '#1051FF'});
         zoneValues.push({value: sum_mid, color: '#000080'});
        setZonesData(zoneValues);
        console.log(zoneValues);

    }
    else if(param == "Senior")
    {
       
        let graphValues: number[] = [];
        graphValues.push(parseInt((num_Sen_010.replace(',',''))));
        graphValues.push(parseInt((num_Sen_025.replace(',',''))));
        graphValues.push(parseInt((num_Sen_mid.replace(',',''))));
        graphValues.push(parseInt((num_Sen_075.replace(',',''))));
        graphValues.push(parseInt((num_Sen_090.replace(',',''))));
        setGraphData(graphValues);
        console.log(graphValues);


        num_Sen_010 = parseInt(num_Sen_010);
        num_Sen_025 = parseInt(num_Sen_025);
        num_Sen_mid = parseInt(num_Sen_mid);
        num_Sen_075 = parseInt(num_Sen_075);
        num_Sen_090 = parseInt(num_Sen_090);

        sum_senior = num_Sen_010 + num_Sen_025 + num_Sen_075 + num_Sen_090 + num_Sen_mid;

        console.log(sum_senior);


        let zoneValues: any[] = [];
        // zoneValues.push({value: 0, color: '#191970'});
         zoneValues.push({value: num_Sen_010, color: '#000099'});
         zoneValues.push({value: num_Sen_025, color: '#4682B4'});
         zoneValues.push({value: num_Sen_mid, color: '#1434A4'});
         zoneValues.push({value: num_Sen_075, color: '#3F00FF'});
         zoneValues.push({value: num_Sen_090, color: '#1051FF'});
         zoneValues.push({value: sum_senior, color: '#000099'});
        setZonesData(zoneValues);
        console.log(zoneValues);

    }     
    
  };

  const bellCurveConfig = {
    chart: {
      style: {
          fontFamily: 'Poppins'
      }
    },
    credits:{
      enabled:false,
    },
    title: {
      text: 'Percentiles'
    },
    xAxis: [
      {
        categories: ['10th', '25th', '50th', '75th', '90th']
      },
      {
        title: {
          text: 'Percentile'
        },
        visible:true,
      }, 
      {
        title: {
          text: 'Curve'
        },
        opposite: true,
        visible: true
      }],
    yAxis: [{
      title: { text: 'Percentile' },
      visible: true
    }, {
      title: { text: 'Curve' },
      opposite:true,
      visible: true
    }],
    colors: ['#191970'],
    series: [{
      lineColor: '#000099',
      name: 'Curve',
      type: 'bellcurve',
      xAxis: 1,
      yAxis: 1,
      baseSeries: 1,
      zIndex: -1,
      zoneAxis: 'x',
      zones: zonesData
    }, {
      name: 'Data',
      type: 'scatter',
      data: graphData,
      accessibility: {
        exposeAsGroupOnly: true
      },
      marker: {
        radius: 5,
        fillColor: '#FF3300',
        enabled: true,
        visible: true
      }
    }]
  };

  return (
    <div>
      <Row className='pt-2 pb-2' style={{marginTop: "20px"}}>
       <Col>
           <Button variant='outline-info' style={{margin: "5px"}} onClick={(e)=>getGraphData("Entry")}>Entry-Level</Button>
           <Button variant='outline-info' style={{margin: "5px"}} onClick={(e)=>getGraphData("Mid")}>Mid-Level</Button>
           <Button variant='outline-info' style={{margin: "5px"}} onClick={(e)=>getGraphData("Senior")}>Senior-Level</Button>
       </Col>
      </Row>


      <div  style={{height:"800px !important",position:"relative", marginBottom:"1%", marginTop: "20px", padding:"1%"}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={bellCurveConfig}/>
      </div>
    </div>
  )
}
