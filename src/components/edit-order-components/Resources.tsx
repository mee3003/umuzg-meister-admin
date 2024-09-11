import { Grid } from '@mui/material';

import OrderField from '../OrderField';
import { AppCard } from '../shared/AppCard';

import { TimeBasedPrice } from 'um-types';

export default function Resources() {
  return (
    <Grid item xs={4}>
      <AppCard title="Träger und LKW">
        <OrderField path="workersNumber" label="Träger" type="number" />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <OrderField path="transporterNumber" label="LKW 3.5" type="number" />
          </Grid>
          <Grid item xs={6}>
            <OrderField path="t75" label="LKW 7.5" type="number" />
          </Grid>
        </Grid>
        <OrderField<TimeBasedPrice> path="timeBased" type="number" nestedPath="hours" label="Stunden" />
      </AppCard>
    </Grid>
  );
}
