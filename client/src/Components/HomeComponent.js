import React, { Component } from 'react';
import '../App.css';
import { Container} from 'reactstrap';


function Home() {
    return (
        <>
            <div>
                <Container>
                    <h1>Welcome to Acropolis Certichain</h1>
                    <div>
                        <img src="https://aimsr.ac.in/wp-content/uploads/2015/09/building-big-picture.jpg" width={900}/>
                    </div>
                </Container>
            </div>
        </>
    );
}


export default Home;
