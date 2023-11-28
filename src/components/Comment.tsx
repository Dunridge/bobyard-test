import { ICommentProps } from "../utils/interfaces/ICommentProps";
import notFound from '../assets/not-found.png';

export const Comment = ({ comment }: ICommentProps) => {

    return (
        <div className="comment">
            <div className="comment__header">
                <img src={comment.image ? comment.image : notFound} width='100px' height='100px' alt="" className="comment__body-image" />

                <div className="comment__header-info">
                    <div className="comment__author">{comment.author}</div>
                    <div className="comment__date">{comment.date}</div>
                </div>
            </div>

            <div className="comment__body">
                <div className="comment__content">{comment.text}</div>
                <div className="comment__likes">Likes: {comment.likes}</div>
            </div>
        </div>
    );
}