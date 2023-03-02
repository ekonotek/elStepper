import React from 'react';
import { TextField } from 'final-form-material-ui';
import { Field } from 'react-final-form';
import { Grid } from '@material-ui/core';

const Step1 = () => (
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={5} lg={5}>
            <Field fullWidth required name="campo_step1_1" component={TextField} type="text" label="Step 1 - Campo 1" />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
            <Field fullWidth required name="campo_step1_2" component={TextField} type="text" label="Step 1 - Campo 2" />
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
            <Field fullWidth name="campo_step1_3" component={TextField} type="text" label="Step 1 - Campo 3" />
        </Grid>
    </Grid>
);

const Step2 = () => (
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
            <Field fullWidth required name="campo_step2_1" component={TextField} type="text" label="Step 2 - Campo 1" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <Field fullWidth name="campo_step2_2" component={TextField} type="text" label="Step 2 - Campo 2" />
        </Grid>
    </Grid>
);

const Step3 = () => (
    <>
        <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
                <Field
                    fullWidth
                    required
                    name="campo_step3_1"
                    component={TextField}
                    type="text"
                    label="Step 3 - Campo 1"
                />
            </Grid>
        </Grid>
        <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12} md={5} lg={5}>
                <Field fullWidth name="campo_step3_2" component={TextField} type="text" label="Step 3 - Campo 2" />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
                <Field
                    fullWidth
                    required
                    name="campo_step3_3"
                    component={TextField}
                    type="text"
                    label="Step 3 - Campo 3"
                />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
                <Field fullWidth name="campo_step3_4" component={TextField} type="text" label="Step 3 - Campo 4" />
            </Grid>
        </Grid>
    </>
);

export { Step1, Step2, Step3 };
