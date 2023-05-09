export const Statistics = ({
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
}) => {
    return (
        <Statistics>
            <ul>
                <li>
                    <p>Good: <span>{good}</span></p>
                </li>
                <li>
                    <p>Neutral: <span>{neutral}</span></p>
                </li>
                <li>
                    <p>Bad: <span>{bad}</span></p>
                </li> 
                <li>
                    <p>Total: <span>{total}</span></p>
                </li>
                <li>
                    <p>Positive Feedback: <span>{positivePercentage}%</span></p>
                </li>
            </ul>
        </Statistics>
    )
}