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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";
import './style.css'

function BasicLayout({ image, children }) {
  return (
    <PageLayout>
      <MDBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <h1 className={'khoaVt'} style={{
      position: 'relative',
      color: 'white',
      textAlign: 'center',
      marginTop: '5vh'}
      }>KHOA VÔ TUYẾN ĐIỆN TỬ</h1>
      <h2 className={'titleKhoa'} style={{
        position: 'relative',
        color: 'white',
        textAlign: 'center'}
      }>BỘ MÔN THÔNG TIN</h2>
      <h2 className={'titleKhoa'} style={{
        position: 'relative',
        color: 'white',
        textAlign: 'center'}
      }>GIAO DIỆN GIÁM SÁT CẢNH BÁO TỪ XA CHO PHÒNG THÍ NGHIỆM THỰC HÀNH</h2>

      <MDBox px={1} width="100%" height="95vh" mx="auto" style={{
      marginTop: '-150px'}
      }>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
      <Footer light />
    </PageLayout>
  );
}

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
