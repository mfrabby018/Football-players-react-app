import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faArrowsAlt, faMoneyBillWave, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const {Name, Img, Position, Country, Salary} = props.player;
    return (
        <div>
            <div className="col">
                <div className="card main_div">
                    <img src={Img} className="card-img-top p_image" alt={Name}/>
                    <div className="card-body">
                        <h4 className="card-title"> <FontAwesomeIcon icon={faUser}/> {Name}</h4>
                        <h5><FontAwesomeIcon icon={faFlag}/> Country: {Country}</h5>
                        <h5><FontAwesomeIcon icon={faArrowsAlt}/> Position: {Position}</h5>
                        <h5><FontAwesomeIcon icon={faMoneyBillWave} className="fr"/> Price(£/Y): {Salary}</h5>
                        <div className="selectButton d-flex justify-content-between pt-2">
                            <button className="btn btn-success c_b"
                                onClick={()=> {
                                    props.handlePlayerAdd(props.player)
                                }}>
                                <FontAwesomeIcon icon={faUserPlus}/> Select</button>
                            <button className="btn btn-danger c_b"
                                onClick={()=> {
                                    props.handlePlayerRemove(props.player)
                                }}>
                                <FontAwesomeIcon icon={faUserMinus}/> Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;