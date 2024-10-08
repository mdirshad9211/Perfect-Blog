import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail,setThumbnail] = useState('');
  //const [file,setFile] = useState('');
  const modules = {
    toolbar:[
      [{'header': [1,2,3,4,5,6,false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ondered',}, {'list': 'bullet'}, {'indent': '-1'}, {'indent':'+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = [
    "Information","Education", "Investment", "Anime", "Entertainment","Games", "Job Openings", "Technology", "Uncategorized"
  ]


  return (
    <section className="create-post">
      <div className="container">
        <h2>Create post</h2>
        <p className="form_error-message">There is an error message </p>
        <form  className="form create_post-form">
          <input type="text" placeholder = "Title" value={title} onChange= {e =>setTitle(e.target.value)} autoFocus />
          <select name="category"  value={category} onChange={e=>setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key ={cat}> {cat} </option>)
            }
            
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpeg,jpg' />
            <button type="submit" className='btn primary'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost