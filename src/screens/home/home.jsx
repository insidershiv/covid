import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import covidImage1 from '../../assets/covid1.jpg'
import { Grid, Typography } from '@material-ui/core';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <>
      <Grid container>

        <Grid container item direction="row" md={6} sm={12} lg={5} >

          <Grid container item style={{ marginTop: '5rem' }}>

            <Slider {...settings}>
              <div>
                <img src={covidImage1} alt="" height="1%" />
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>

          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography>
            lorem ipsum dolor sit amet, consectetur adip
          </Typography>
        </Grid>
      </Grid>


    </>
  );
}

export default Home;
