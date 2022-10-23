import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
  return (
    <Button
      variant="text"
      to="/"
      startIcon={<ArrowBackIcon />}
      sx={{
        my: { xs: 4, md: 'auto' },
        ml: 4.5,
        width: '125px',
        boxShadow:
          '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      }}
    >
      Back
    </Button>
  );
}

export default BackButton;
