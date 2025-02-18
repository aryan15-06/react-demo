import React from 'react';
import { FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

interface IconProps {
   name: string;
}

const Icon: React.FC<IconProps> = ({name}) => {
   if(name == "circle") {
    return <FaRegCircle/>
   } else if (name == "cross"){
    return <FaTimes/>
   } else {
    return <FaPen/>
   }
}

export default Icon