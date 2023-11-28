import { IComment } from "../interfaces/IComment";

export class CommentModel implements IComment {
    id: string;
    author: string;
    text: string;
    date: string;
    likes: number;
    image: string;

    constructor(
        id: string,
        author: string,
        text: string,
        date: string,
        likes: number,
        image: string
    ) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.image = image;
    }
}