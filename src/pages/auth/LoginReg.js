import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
import Pic1 from "../../images/pic1.png";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh", marginTop: "50px" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 50%",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
          style={{ backgroundColor: "white" }}
        ></Grid>

        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 5 }}>
              <Box sx={{ borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>

            <Box textAlign="center">
              <ShoppingBag sx={{ color: "purple", fontSize: 100 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Login & Register Page
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
