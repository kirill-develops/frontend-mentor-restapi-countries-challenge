import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'gatsby';
import Image from 'mui-image';
import React from 'react';
import { columnFlexProps } from '../styles/theme';

const cardFontProps = {
  fontSize: '14px',
};

const cardTitleFontProps = {
  fontSize: '16px',
  fontWeight: 800,
};

const cardDescriptorFontProps = {
  ...cardFontProps,
  fontWeight: 600,
};

function CountryCard({ data }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        LinkComponent={Link}
        to={`/${data.name.common}`}
      >
        <Image
          src={data?.flags?.svg}
          alt={`${data?.name?.common} flag`}
          sx={{ aspectRatio: '7/4' }}
          loading="lazy"
          fit="cover"
        />
        <CardHeader
          title={data?.name?.common}
          titleTypographyProps={cardTitleFontProps}
          sx={{ p: 3 }}
        />
        <CardContent sx={{ ...columnFlexProps, pt: 0, pb: 5, px: 3 }}>
          <Typography
            variant="subtitle2"
            sx={cardDescriptorFontProps}
          >
            Population:{' '}
            <Typography
              variant="body1"
              component="span"
              sx={cardFontProps}
            >
              {data?.population.toLocaleString('en-US')}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={cardDescriptorFontProps}
          >
            Region:{' '}
            <Typography
              variant="body1"
              component="span"
              sx={cardFontProps}
            >
              {data?.region}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={cardDescriptorFontProps}
          >
            Capital:{' '}
            <Typography
              variant="body1"
              component="span"
              sx={cardFontProps}
            >
              {data?.capital}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
