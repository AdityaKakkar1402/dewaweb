import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="bgimg">
                <img className="bgimage" src="backgroundhome.png" alt="" srcset="" />
                
            </div>
           

     
            <div className="csimagecont">
                <img className="csimage" id="img1"src="group5.png" alt="" srcset="" />
            </div>
       
           
           
            <div className="dewatextcont">
                   <button class="glow-on-hover" type="button">Connect Wallet</button>

                   <h1 className="dewadesline1">Discover</h1>

                   <div className="textimgcont">
                      <img className="textimg" src="dewatext2.png" alt="" srcset="" />
                   </div>
                
                   <h1 className="dewades">DECENTRALISED WATCH</h1>

                   <div className="watchimgcont">
                      <img className="watchimg" height="100px" src="watchimg.png" alt="" srcset="" />
                   </div>

            </div>
         



         
        </div>
    )
}

export default Home
