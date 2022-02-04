import SignUp from './SignUp';

import { Container, Paper } from '@mui/material';

function App() {
    return (
        <Container maxWidth='sm' sx={stylesContainer}>
            <Paper sx={stylesPaper}>
                <h2 style={{ margin: 0, color: '#5096DC' }}>Register User</h2>
                <SignUp />
            </Paper>
        </Container>
    );
}

const stylesPaper = {
    padding: '40px',
    background: 'rgba( 255, 255, 255, 0.2 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 11px )',
    WebkitBackdropFilter: 'blur( 11px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
};

const stylesContainer = {
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    msTtransform: 'translate(-50%, -50%)' /* for IE 9 */,
    WebkitTransform: 'translate(-50%, -50%)' /* for Safari */,
};

export default App;
