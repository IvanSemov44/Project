import { ReactNode, useState } from 'react';

interface Props {
    showLength?: number;
    children: ReactNode
}

const ExtendableText = ({ showLength = 100, children }: Props) => {
    const [full, setFull] = useState(false);

    const handleClick = () => setFull(!full);

    const length = full ? showLength : 255
    if (children!.toString().length <= 20) return <p>{children}</p>
    return (
        <div>
            {children?.toString().substring(0, length)}...
            <button onClick={handleClick}>
                Show {full ? "More" : "Less"}
            </button>
        </div>
    )
}

export default ExtendableText