import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { IconDiv } from './Icon.style';

function Icon({ chatBotState, setChatBotState, buttonDisabled }) {
    return (
        <IconDiv chatBotState={chatBotState} onClick={() => setChatBotState(!chatBotState)} disabled={buttonDisabled}>
            <IconContext.Provider value={{ color: 'white' }}>
                {chatBotState ? <FaChevronDown/> : <FaChevronUp/>}
            </IconContext.Provider>
        </IconDiv>
    )
}

export default Icon;