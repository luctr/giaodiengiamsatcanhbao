/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ReactECharts from 'echarts-for-react'


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const nhietDo = {
  title: {
    show: false,
    text: 'Nhiệt độ'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Max', 'Min', 'Avg']
  },
  xAxis: [
    {
      type: 'category',
      data: ['7/2/2022 \n Thứ 2', '8/2/2022 \n Thứ 3', '9/2/2022 \n Thứ 4', '10/2/2022 \n Thứ 5', '11/2/2022 \n Thứ 6', '12/2/2022 \n Thứ 7 ', '13/2/2022 \n CN'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '°C',
      min: 0,
      max: 50,
      interval: 10,
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    {
      type: 'value',
      name: '',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: ''
      }
    }
  ],
  series: [
    {
      name: 'Max',
      type: 'bar',
      data: [
        21, 17, 14, 17, 14, 21, 17, 
      ]
    },
    {
      name: 'Min',
      type: 'bar',
      data: [
        15, 12, 11, 11, 12, 15, 12
      ]
    },
    {
      name: 'Avg',
      type: 'line',
      // yAxisIndex: 1,
      data: [18, 14.5, 12.5, 14, 13, 18, 14.5]
    }
  ]
};
const doAm = {
  title: {
    show: false,
    text: 'Độ ẩm'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    show: false,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
  legend: {
    data: ['Max', 'Min', 'Avg']
  },
  xAxis: [
    {
      type: 'category',
      data: ['7/2/2022 \n Thứ 2', '8/2/2022 \n Thứ 3', '9/2/2022 \n Thứ 4', '10/2/2022 \n Thứ 5', '11/2/2022 \n Thứ 6', '12/2/2022 \n Thứ 7 ', '13/2/2022 \n CN'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '%',
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      name: '',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: ''
      }
    }
  ],
  series: [
    {
      name: 'Max',
      type: 'bar',
      data: [
        82, 89, 93, 88, 92, 89, 89
      ]
    },
    {
      name: 'Min',
      type: 'bar',
      data: [
        76, 83, 87, 84, 85, 82, 85
      ]
    },
    {
      name: 'Avg',
      type: 'line',
      //yAxisIndex: 1,
      data: [79, 86, 90, 86, 88.5, 85.5, 87]
    }
  ]
};

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={5}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Biểu đồ nhiệt độ
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={nhietDo}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Biểu đồ độ ẩm
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={doAm}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
