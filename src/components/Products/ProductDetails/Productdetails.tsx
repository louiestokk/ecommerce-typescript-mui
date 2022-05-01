import React from "react";
import { useStyles } from "./styles";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

type Images = {
  id: string;
  url: string;
};

type Prod = {
  image: Images;
  name: string;
  price?: any;
  id: string;
};
type Props = {
  products: Prod;
  image?: Images;
  url?: string;
  name?: string;
  price: number;
};

const Productdetails: React.FC<Props> = ({ products }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid item>
      <Card
        className={classes.card}
        onClick={() => navigate(`/product/${products.id}`)}
      >
        <CardMedia
          image={products.image.url}
          title={products.name}
          className={classes.image}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {products.name}
          </Typography>
          <Typography variant="h6">${products.price.raw}</Typography>
        </CardContent>
        {/* <CardActions>
          <Button type="button" color="primary" variant="contained">
            Add to cart
          </Button>
          <Button type="button" color="secondary" variant="contained">
            Se more
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Productdetails;
