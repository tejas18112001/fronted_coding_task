import React from 'react'
import {BrowserRouter  , Routes , Route} from 'react-router-dom' ;
import {Box} from '@mui/material' ;
import {ContactList , HomePage , ContactPage} from './components' ;
const App = () => (
    <BrowserRouter>
        <Box>
          
        <Routes>
             <Route exact path='/' element={ <HomePage/>} />
             <Route path = '/ContactPage' element = {<ContactPage/>} />
             <Route path = '/ContactList' element = {<ContactList/>} />
             
        </Routes>
            
        </Box> 
    </BrowserRouter>
)

export default App
