import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPoll, faCheck} from '@fortawesome/free-solid-svg-icons';
import './CartPlayer.css';

const CartPlayer = (props) => {
    const {total} = props;
    const totalBudget = total.reduce((totalBudget, player) => totalBudget + parseInt(player.Salary.slice(0,-1)), 0);
    return (
        <div>
            <div className="card">
                <div className="card-header text-center">
                    <h4><FontAwesomeIcon icon={faPoll}/> Selection Summary</h4>
                </div>
                <div className="card-body">
                    <h5>Total Selected Players: {total.length} </h5>
                    <ul className="s_player">
                        {
                            total.map(player => <h6 className="sl_fonts"
                                key={player.id}>
                                    <FontAwesomeIcon icon= {faCheck}/> 
                                    <strong> {player.Name}</strong> -selected for  
                                    <strong> {player.Salary}</strong>
                                </h6>)
                        }
                    </ul>
                </div>
                <div className="card-footer text-center">
                    <h4>Total Budget: {totalBudget}M </h4>
                </div>
            </div>
        </div>
    );
};

export default CartPlayer;