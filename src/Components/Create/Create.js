import React, { Fragment, useCallback, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { firebaseContext,authContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Create = () => {

const {firebase} = useContext(firebaseContext)
const {user} = useContext(authContext)
const [name,setName] = useState('')
const [category,setCategory] = useState('')
const [price,setPrice] = useState('')
const [image,setImage]  = useState(null)
const history = useHistory()
const date = new Date()
const handleSubmit =()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    console.log("hekjashj")
    ref.getDownloadURL().then((url)=>{
      console.log("url = ",url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt: date.toDateString()
      })
      history.push('/')
    })
    .catch((error)=>{
      console.log(error);
    })
  })
}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              id="fname"
              onChange={(e)=>{setName(e.target.value)}}
              name="Name"
              placeholder='Enter name'
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              onChange={(e)=>{setCategory(e.target.value)}}
              name="category"
              placeholder='Enter category'
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number" 
             value={price} 
             id="fname" 
             onChange={(e)=>{setPrice(e.target.value)}} 
             name="Price"
             placeholder='Enter price'
            />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):null}></img>
          
            <br />
            <input type="file" onChange={(e)=>{
             setImage(e.target.files[0])
            }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
