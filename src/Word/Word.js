import Styled from './Word.module.css';
import data from '../data.json'

function Word({name}) {
    return (
        <div  className={Styled['container']}>{decodeURI(window.location.pathname.split('/')[2])}</div>
    )
};




export default Word;