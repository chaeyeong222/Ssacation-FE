
import { useLoaderData } from 'react-router-dom';

import NewPost from '../routes/NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';


function PostsList() {

    const posts = useLoaderData(); 
     
    return (
        <> 
            {posts.length > 0 &&
               ( <ul className={classes.posts}>
                    {posts.map((post) =>
                    ( <Post key={post.id} id={post.id} 
                     author={post.author} body={post.body} />))}
                </ul>)
            }
            {posts.length === 0 && (
                <div style={({ textAlign: 'center', color: 'white' })}>
                    <h2> 아직 포스팅이 없습니다</h2>
                    <p>추가해보세용</p>
                </div>
            )}
        </>
    );
}

export default PostsList;