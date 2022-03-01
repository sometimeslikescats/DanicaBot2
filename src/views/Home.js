import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { Header } from '../styles/home';

import Container from '@mui/material/Container';

import Conversation from '../components/conversation'
import { Main} from '../styles/home'


import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Home() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main>
                {/* Hero unit */}
              
                    <Header>Simple chatflow with DanicaBot</Header>
                    <Container maxWidth="sm">
                        <Conversation />
                    </Container>

            </Main>

        </ThemeProvider>
    );
}