import React, { useState } from 'react';
import { Backdrop, CircularProgress, createStyles, makeStyles, Paper, Typography } from '@material-ui/core';
import './App.css';
import { resetForm, Step1, Step2, Step3, StepPage } from './component';

const useStyles = makeStyles((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.snackbar + 1,
            color: '#fff',
        },
    }),
);

function App() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const initialValues = {
        campo_step1_1: '',
        campo_step1_2: '',
        campo_step2_1: '',
        campo_step3_1: '',
        campo_step3_3: '',
    };

    const steps = [
        { id: 0, label: 'Step 1', component: <Step1 />, requestFields: ['campo_step1_1', 'campo_step1_2'] },
        { id: 1, label: 'Step 2', component: <Step2 />, requestFields: ['campo_step2_1'] },
        { id: 2, label: 'Step 3', component: <Step3 />, requestFields: ['campo_step3_1', 'campo_step3_3'] },
    ];

    const validSchema = (values) => {
        const errors = {};
        if (!values.campo_step1_1) errors.campo_step1_1 = 'Obrigatório';
        if (!values.campo_step1_2) errors.campo_step1_2 = 'Obrigatório';
        if (!values.campo_step2_1) errors.campo_step2_1 = 'Obrigatório';
        if (!values.campo_step3_1) errors.campo_step3_1 = 'Obrigatório';
        if (!values.campo_step3_3) errors.campo_step3_3 = 'Obrigatório';
        return errors;
    };

    const onSubmit = (values, form) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            resetForm(form, initialValues);
        }, 5000);
    };

    const submitForm = (form) => {
        form.submit();
    };

    const actions = [
        { icon: 'refresh', color: '#cb8427', name: 'Reset', action: resetForm, disabled: false },
        { icon: 'save', color: '#6bd64b', name: 'Salvar', action: submitForm, disabled: true },
    ];

    return (
        <Paper style={{ padding: 16, margin: 100, textAlign: 'center' }}>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Typography variant="h4">
                Stepper Material-UI Validation
                <Typography variant="caption"> by Claiton Nazaret</Typography>
            </Typography>
            <StepPage
                initialValues={initialValues}
                steps={steps}
                actions={actions}
                onSubmit={onSubmit}
                validSchema={validSchema}
            />
        </Paper>
    );
}

export default App;
