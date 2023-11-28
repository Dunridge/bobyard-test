import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Comment } from './components/Comment';
import commentsList from './data/comments.json';
import { IComment } from './utils/interfaces/IComment';
import { CommentModel } from './utils/models/CommentModel';

function App() {
  const [comments, setComments] = useState<IComment[]>(commentsList.comments);

  useEffect(() => {
  }, []);

  const handleAddComment = () => {
    // 1 - create a model for the comment
    // 2 - fill the model with data from user (...)
    const id = '1';
    const author = 'Max';
    const text = 'This is some custom text...';
    const date = '12015-08-31';
    const likes = 6;
    const image = '../assets/not-found.png'; // TODO: convert to the imported image from the path 
    let newComment: IComment = new CommentModel(id, author, text, date, likes, image);

    // 3 - push the new comment to the comments 
    setComments([...comments, newComment]);
  }

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        {
          comments.map(commentData => <Comment comment={commentData} key={commentData.id} />)
        }
        <div className="app__add-comments">
          <button className="app__add-comments-btn" onClick={handleAddComment}>
            Add comment
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
