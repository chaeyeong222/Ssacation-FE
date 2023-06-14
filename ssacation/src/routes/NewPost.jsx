 
import { Link , Form, redirect} from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() { 

  return (
    <Modal>
      <Form method='post' className={classes.form}>
      <p>
          <label htmlFor="name">Title</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="body">Content</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
       
        <p className={classes.action}>
          <Link to=".." type="button" >Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
 // formData.get('body') //이러한 방식으로도 사용자가 입력한 것 가져올 수 있음
 const postData = Object.fromEntries(formData); //{body:'...', name:'...'}
 await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  }); 

  return redirect('/');
}