import { ICommentProps } from "../utils/interfaces/ICommentProps";

export const Comment = ({ comment }: ICommentProps) => {

    return (
        <div className="comment">
            <div className="comment__header">
                <div className="comment__author">{ comment.author }</div>
                <div className="comment__likes">{ comment.likes }</div>

                <div className="comment__date">{ comment.date }</div>
            </div>

            <div className="comment__body">
                {/* TODO: configure the height  */}
                <img src={comment.image} width='100px' height='100px' alt="" className="comment__body-image" />
                <div className="comment__content">
                    { comment.text }
                </div>
            </div>
        </div>
    );
}