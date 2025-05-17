import './Csscompantes/App.css'
import Posts from './Compontes/Posts';
import Stories from './Compontes/Stories'
const feed = () => {
  return (
    <div>
     <div className=' storiesbar'><Stories /></div> 
    <div><Posts /></div>
    </div>
  );
};

export default feed;