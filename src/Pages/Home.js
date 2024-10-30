import Styled from './Home.module.css';
import data from '../data.json'
import { Link } from "react-router-dom";


export function Home() {
    return (
        <div className={Styled['container']}>
            {data.map(function(elem) {
                return (
                        <Link to={`/Word/${elem}`} name={elem}>
                            <button  className={Styled['container__button']}> 
                                {elem}
                            </button> 
                        </Link>
                )
            })}
        </div>
    )
};
