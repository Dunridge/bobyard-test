import { ICommentProps } from "../utils/interfaces/ICommentProps";
import notFound from '../assets/not-found.png';
import { useEffect, useState } from "react";

export const Comment = ({ comment }: ICommentProps) => {
    const [commentData, setCommentData] = useState(comment);
    // TODO: (2.1) define edit/save state boolean and modify the commentData object --> OR just output and modify the state of the array directly 

    useEffect(() => {
        console.log('commentData', commentData);
    }, [commentData])
    
    useEffect(() => {
        const date = new Date(comment.date);
        console.log('comment.date', comment.date);
        console.log('date', date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Note: Months are zero-based, so we add 1
        const day = date.getDate();
        const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        console.log('dateString', dateString);
        setCommentData({
            ...commentData,
            date: dateString
        });
    }, [comment]);

    

    return (
        <div className="comment">
            <div className="comment__header">
                <img src={commentData.image ? commentData.image : notFound} width='100px' height='100px' alt="" className="comment__body-image" />

                <div className="comment__header-info">
                    <div className="comment__author">{commentData.author}</div>
                    <div className="comment__date">{commentData.date}</div>
                </div>
            </div>

            <div className="comment__body">
                <div className="comment__content">{commentData.text}</div>
                <div className="comment__likes">Likes: {commentData.likes}</div>
            </div>
        </div>
    );
}