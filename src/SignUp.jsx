import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Box, TextField, Button } from '@mui/material';

const validationSchema = yup.object({
    username: yup.string().required('Enter a username'),
    email: yup.string().required('Enter a valid email'),
    password: yup
        .string()
        .min(5, 'Your password should be more than 5 character length')
        .max(16, 'Your password have a limit of 16 character length')
        .required('Password is required'),
});

const SignUp = () => {
    const initialState = {
        username: '',
        email: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);

            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box width={400} margin='0 auto'>
                <TextField
                    sx={{ margin: '10px 0' }}
                    fullWidth
                    id='username'
                    label='username'
                    variant='standard'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                    }
                    helperText={
                        formik.touched.username && formik.errors.username
                    }
                />
                <TextField
                    sx={{ margin: '10px 0' }}
                    fullWidth
                    id='email'
                    label='email'
                    variant='standard'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ margin: '10px 0' }}
                    fullWidth
                    id='password'
                    label='password'
                    variant='standard'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />
            </Box>
            <Box width={400} margin='15px auto '>
                <Button
                    type='submit'
                    variant='outlined'
                    fullWidth
                    sx={{ marginTop: '1rem' }}
                >
                    Sign Up
                </Button>
            </Box>
        </form>
    );
};

export default SignUp;
