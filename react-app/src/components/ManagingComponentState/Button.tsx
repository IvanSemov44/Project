import produce from "immer";
import { useState } from 'react';

const Button = () => {
    // const [isVisible, setVisibility] = useState(false);
    // let count = 0
    // const handleClick = () => {
    //     setVisibility(true);
    //     count++;
    //     console.log(count);
    // }

    // const [bugs, setBugs] = useState([
    //     { id: 1, title: "Bug 1", fixed: false },
    //     { id: 1, title: "Bug 2", fixed: false }
    // ]);

    // const handleClick = () => {
    //     setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug));
    // }

    const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", fixed: false },
        { id: 1, title: "Bug 2", fixed: false }
    ]);

    const handleClick = () => {
        // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug));
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }))
    }

    return (
        <div>
            {bugs.map(bug =>
                <p key={bug.id}>
                    {bug.title} {bug.fixed ? "Fixed" : "New"}
                </p>
            )}
            <button onClick={handleClick}>Show</button>
        </div>
    )
}

export default Button