import React, { FC, useState } from 'react';
import {
    Button,
    createStyles,
    Icon,
    makeStyles,
    MobileStepper,
    Paper,
    Step,
    StepLabel,
    Stepper,
    useTheme,
} from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { Form, FormProps } from 'react-final-form';

type Action = {
    icon: any,
    name: string,
    color: string,
    action: () => any,
    disabled: boolean,
};

interface StepPageProps {
    initialValues: {};
    steps: [];
    actions: Action[];
    validSchema: any;
    onSubmit: () => any;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        stepLabel: {
            width: '100%',
            textAlign: 'center',
        },
        speedDial: {
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }),
);

export const resetForm = (form: FormProps, initialValues) => {
    Object.keys(initialValues).map((k) => form.resetFieldState(k));
    setTimeout(form.reset);
};

const StepPage: FC<StepPageProps> = ({ initialValues, steps, actions, validSchema, onSubmit }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const checkCombination = (deck, combinations) => {
        const t = Object.keys(combinations).map((k) => deck.includes(k));
        return t.find((s) => s);
    };

    const findError = (req, errors) => checkCombination(req, errors);

    // Dial functions
    const [openDial, setOpenDial] = useState(false);

    return (
        <Paper style={{ padding: 16, margin: 50 }}>
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                keepDirtyOnReinitialize={false}
                validate={validSchema}
                render={({ handleSubmit, form, submitting, errors }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map(({ id, label, requestFields }) => (
                                <Step key={id}>
                                    <StepLabel error={findError(requestFields, errors)} className={classes.stepLabel}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <>
                            {steps.map(({ id, component }) => (
                                <Paper key={id} hidden={activeStep !== id} elevation={0} style={{ padding: 16 }}>
                                    {component}
                                </Paper>
                            ))}
                        </>
                        <MobileStepper
                            steps={steps.length}
                            position="static"
                            variant="dots"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    className={classes.button}
                                    disabled={activeStep === steps.length - 1}
                                >
                                    Próximo
                                    <Icon>
                                        {theme.direction === 'rtl' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}
                                    </Icon>
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    className={classes.button}
                                >
                                    <Icon>
                                        {theme.direction === 'rtl' ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}
                                    </Icon>
                                    Anterior
                                </Button>
                            }
                        />
                        <SpeedDial
                            ariaLabel="SpeedDial example"
                            className={classes.speedDial}
                            hidden={submitting}
                            icon={<SpeedDialIcon />}
                            onClose={() => setOpenDial(false)}
                            onOpen={() => setOpenDial(true)}
                            open={openDial}
                            direction="up"
                        >
                            {actions &&
                                actions.map((act) => (
                                    <SpeedDialAction
                                        title={act.name}
                                        key={act.name}
                                        hidden
                                        icon={<Icon style={{ color: act.color }}>{act.icon}</Icon>}
                                        onClick={() => act.action(form, initialValues)}
                                    />
                                ))}
                        </SpeedDial>
                    </form>
                )}
            />
        </Paper>
    );
};

export default StepPage;
