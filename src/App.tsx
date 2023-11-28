import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Comment } from './components/Comment';
import commentsList from './data/comments.json';
import { IComment } from './utils/interfaces/IComment';

function App() {
  const [comments, setComments] = useState<IComment[]>(commentsList.comments);

  useEffect(() => {
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        {
          comments.map(commentData => <Comment comment={commentData} key={commentData.id} />)
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
