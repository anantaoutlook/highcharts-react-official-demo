import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function LargeemppiechartGreatLakes() {

  const [graphData, setGraphData] = React.useState<any[]>([]);

  let graphDataArray: any[] = [];
  let graphDataArray1: any[] = [];

  React.useEffect(() => {
    getData();
    getData1();
  }, []);

  const getData = async () => {
    await fetch('https://core-dev.mployeradvisor.com/system/GetInsightsAnalyticsPlanDesign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ "RegionList": "Great Lakes" })
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      const labelSet = new Set<string>()
      response.forEach((element: any) => {
        if (element.question.startsWith('Plan Type') && element.companySize != '1-50 Employees') {
          labelSet.add(element.question);
          console.log(element.question);
        }
      });
      
      //let graphDataArray: any[] = [];
      let allSum = 0;
      Array.from(labelSet).forEach((label) => {
        let finalNo = 0;
        let finalCounter = 0;
        response.forEach((element: any) => {
          if (element.question == label && element.companySize != '1-50 Employees') {
            finalCounter++;
            finalNo += parseFloat(element.final);
          }
        });
        allSum += Math.round(finalNo / finalCounter);
        graphDataArray.push({ name: label.replace('Plan Type - ', ''), y: Math.round(finalNo / finalCounter) });
      });
      graphDataArray.forEach((element) => {
        element.y = Math.round((element.y / allSum) * 100)
      });
     console.log(graphDataArray);
   // setGraphData(graphDataArray);
    });
  };

   
  const getData1 = async () => {
    await fetch('https://core-dev.mployeradvisor.com/system/GetInsightsAnalyticsPlanDesign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ "RegionList": "Mountain" })
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      const labelSet = new Set<string>()
      response.forEach((element: any) => {
        if (element.question.startsWith('Plan Type') && element.companySize != '1-50 Employees') {
          labelSet.add(element.question);
          console.log(element.question);
        }
      });
      
     // let graphDataArray: any[] = [];
      let allSum = 0;
      Array.from(labelSet).forEach((label) => {
        let finalNo = 0;
        let finalCounter = 0;
        response.forEach((element: any) => {
          if (element.question == label && element.companySize != '1-50 Employees') {
            finalCounter++;
            finalNo += parseFloat(element.final);
          }
        });

        if(!isNaN(finalCounter) && !isNaN(finalNo))
        {
          allSum += Math.round(finalNo / finalCounter);
          graphDataArray1.push({ name: label.replace('Plan Type - ', ''), y: Math.round(finalNo / finalCounter) });
        }
       
      });
      graphDataArray1.forEach((element) => {
        element.y = Math.round((element.y / allSum) * 100)

      });

     // console.log(graphDataArray1);
      const result = mergeArrayOfObjects(graphDataArray, graphDataArray1, "name");
      console.log(result);
      setGraphData(result);
     // setGraphData(graphDataArray1); 
    });
  };

  const mergeArrayOfObjects = (original, newdata, selector) => {
    newdata.forEach(dat => {
      const foundIndex = original.findIndex(ori => ori[selector] == dat[selector]);
      if (foundIndex >= 0) original.splice(foundIndex, 1, {...dat,y:dat.y+original[foundIndex].y});
          else original.push(dat);
    });
  
    return original;
  };
  
  

  
  const pieChart = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      style: {
        fontFamily: 'Poppins'
      }
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        colors: ['#000099', '#FF3300', '#787878', '#D2B48C', '#00BFFF'],
        showInLegend: true
      },
      series: {
        dataLabels: {
          enabled: true,
          format: '{y}%',
          distance: -30,
          color: 'black'
        }
      } 
    },
    title: {
      text: 'Large Employer: Plan Type Utilization',
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: graphData
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={pieChart}
      />
    </div>
  )
}