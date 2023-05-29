import { useEffect, useState } from 'react';
import s from './styles.module.css';
import cn from 'classnames';
import { ReactComponent as StarIcon } from './star.svg'; 


function Rating({isEditable = false, currentRating, setCurrentRating}) {
    const [ratingArray, setRattingArray] = useState(new Array(5).fill(<></>));
    const constructRating = (filledRating) => {

        const updateArray = ratingArray.map((ratingElement, index) => {
            return (
                <StarIcon className={cn(s.star,
                {
                    [s.filled] : index < filledRating,
                    [s.editable] : isEditable
                })}
                onMouseEnter = {() => changeDisplay(index + 1)}
                onMouseLeave = {() => changeDisplay(currentRating)}
                onClick = {() => changeRating(index + 1)}
                />
            )
        })

        setRattingArray(updateArray);
    }

    function changeDisplay(rating){
        constructRating(rating)
    }

    function changeRating(rating){
        if (!isEditable || !setCurrentRating) return
        setCurrentRating(rating)
    }

    useEffect(() => {
        constructRating(currentRating);
    }, [currentRating])

    return (
        ratingArray.map((r, i) => <span key={i}>{r}</span>)
    );
}

export default Rating;