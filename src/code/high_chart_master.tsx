import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { SimpleGrid, Box, Select, Button } from "@chakra-ui/react";


const HighChartsMaster = (chartInfo: any) => {

  

    const [chartType, setChartType] = React.useState<string>();
    const [chartOptions, setChartOptions] = React.useState<any>();

    React.useEffect(() => {
        setChartType(chartInfo.chartType);
        getStackedGraphData();
      }, [chartInfo.chartType]);
    

    const getStackedGraphData = () => {

        setChartOptions({
          chart: {
              type: 'column',
              marginBottom: 80,
              height: 500,
              width: 1200,
              animation: {
                enabled: true,
                duration: 1000,
                easing: 'linear'
             }
          },
          title: {
              text: ''
          },
          credits: {
            enabled: false
        },
          xAxis: {
              categories: ['2020', '2021', '2022']
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              },
              stackLabels: {
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: ( // theme
                          Highcharts.defaultOptions.title.style &&
                          Highcharts.defaultOptions.title.style.color
                      ) || 'gray',
                      textOutline: 'none'
                  }
              }
          },
          legend: {
            symbolWidth: 18,
            symbolRadius: 1,
            squareSymbol: true,
              align: 'center',
              verticalAlign: 'bottom',
              y: 0,
              floating: true,
              backgroundColor:
                  Highcharts.defaultOptions.legend.backgroundColor || 'white'
          },
          tooltip: {
            shared: false,
            useHTML: true,
            borderWidth: 0,
            shadow: false,
            borderColor: 'white',
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0)',
            formatter: function() {
                console.log(this);

                return '<div class="myTooltip" style="background-color:' + this.series.color + ';" >' + this.series.name + ', ' + this.x + ':' + this.y + '</div>';
            }
            
        },
          plotOptions: {
              column: {
                  stacking: 'normal',
                  pointWidth: 260,
                  dataLabels: {
                      enabled: true
                  }
              },
              series: {
                animationLimit: 9e9
            }
          },
          series: [{
              name: 'Europe',
              data: [1, 1, 1],
              color: "#bf32d1",
          }, {
              name: 'North America',
              data: [2, 6, 3],
              color: "#9b51e0"
          }, {
              name: 'Asia',
              data: [3, 4, 4],
              color: "#68a5e3"
          }, {
            name: 'Latin Ameria',
            data: [3, 4, 7],
            color: "#4d9ae8"
        }]
      });
    
      };

      return(
          <div>

            {/* {chartType == 'Stackchart' &&
        <SimpleGrid columns={3} spacing={2}>
          <Box p={2} m={10}>
            <Button colorScheme='teal' size='sm' onClick={() => getStackedGraphData()} style={{padding:'10'}}>Stack Chart</Button>
          </Box>
        </SimpleGrid>
      } */}
       {(!!chartOptions && !!Highcharts) &&
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      }

          </div>
      );
}

export default HighChartsMaster;