import React, { useState, useEffect } from "react";
import './Home.css'
import { Box, Button, Grid, Paper } from "@material-ui/core";

function Home () {
    
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://images-ext-2.discordapp.net/external/vHBEfQIIU075-tdFDZUiSl6JnG4y2XvQXmxRB-l_nk8/%3Fs%3D280%26v%3D4/https/avatars.githubusercontent.com/u/115719526" alt="" style={{width: "80%", height: "80%"}} />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Texto 1</Button>
                        <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export { Home }