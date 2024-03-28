import * as React from "react"
import Main from '../components/main'

const Hello = ({ name }) => 
    <Main>
        <h1>Hello {name}!</h1>

    </Main>

const Home = () => <Hello name="Portfolio"/>

export default Home
