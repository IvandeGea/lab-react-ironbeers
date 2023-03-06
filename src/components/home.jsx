import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function Home() {

    return (
        <div >

            <Navbar />

            <div>

                <div>
                    <img src={beers} alt="beers" className="" />

                    <h1>
                        <Link to='/beers' style={{ textDecoration: "none", color: "black" }}> All Beers </Link>
                    </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam felis, venenatis id nisi a, scelerisque convallis justo. Nam ullamcorper accumsan aliquet. Etiam efficitur accumsan purus, eget volutpat erat pulvinar et.</p>


                </div>


                <div>

                    <img src={randomBeer} alt="Random-beer" className="" />

                    <h1> <Link to='/random-beer' style={{ textDecoration: "none", color: "black" }}> Random Beer </Link></h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam felis, venenatis id nisi a, scelerisque convallis justo. Nam ullamcorper accumsan aliquet. Etiam efficitur accumsan purus, eget volutpat erat pulvinar et.</p>

                </div>


            </div>


            <div>
                <img src={newBeer} alt="new-Beer" className="" />
                <h1> <Link to='/new-beer' style={{ textDecoration: "none", color: "black" }}> Create New Beer </Link></h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam felis, venenatis id nisi a, scelerisque convallis justo. Nam ullamcorper accumsan aliquet. Etiam efficitur accumsan purus, eget volutpat erat pulvinar et.</p>

            </div>

        </div>
    );
}

export default Home;




