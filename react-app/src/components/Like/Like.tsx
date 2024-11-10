import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [status, setStatus] = useState(true);

    const handleClick = () => {
        setStatus(!status)
        onClick();
    }

    if (status)
        return <IoHeartOutline color="#ff6b81" size="100" onClick={handleClick} />
    return <IoHeartSharp color="#ff6b81" size="100" onClick={handleClick} />
}

export default Like