import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CartPlayer from '../Players/CartPlayer';
import './Top.css';

const Top = () => {
    const [players, setplayers] = useState([])
    const [total, setTotal] = useState([])

    // select player handle
    const handlePlayerAdd = (player) =>{
        if(total.includes(player)){
            alert("Player already selected!! Try others...")
            return;
        }
        const setNew = [...total, player];
        setTotal(setNew);
    }

    const handlePlayerRemove = (player) =>{
        if (total.includes(player)){
            const playerIndex = total.indexOf(player);
            total.splice(playerIndex, 1);
            const setNew = [...total];
            setTotal(setNew);
        }
        else{
            alert("Player is not selected yet!");
        }
    }

    useEffect(()=>{
        fetch('https://api.mocki.io/v1/b05cd75d')
        .then(response => response.json())
        .then(data => setplayers(data))
    }, [])

    return (
        <div className="top_container">
            <div className="section_header">
                <h2 className="heading">Top Players From Individual Countries</h2>
                <h4>Recruit the best players</h4>
            </div>
            <div className="d-flex main-div">
                <div className="col-md-8">
                    <div className="row row-cols-1 row row-cols-xl-3 row-cols-lg-2 row-cols-md-1 g-3 custom">
                    {
                        players.map(plr =>
                        <Card
                            key={plr.id}
                            player ={plr}
                            handlePlayerAdd ={handlePlayerAdd}
                            handlePlayerRemove={handlePlayerRemove}
                            >  
                        </Card>)
                    }
                </div> 
                </div>
                <div className="col-md-4">
                    <div className="players-cart-container">
                    <CartPlayer total ={total}></CartPlayer>
                </div>
                </div>
            </div>    
        </div>
    );
};

export default Top;

