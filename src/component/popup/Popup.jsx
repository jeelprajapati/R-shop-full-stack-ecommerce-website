import React, { useEffect, useState } from "react";
import "./Popup.css";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";


  const Popup = ({ id,type,setType}) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [size, setSize] = useState([]);
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [sucess,setSucess]=useState(false);

  const onchange = (e) => {
    const storageRef = ref(storage, `${e.target.files[0].name}`);

    const uploadTask = uploadBytesResumable(storageRef,e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
         console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL)
        });
      }
    );
  };
  const timeout=()=>{
    setTimeout(() => {
      setSucess(false)
    }, 2000);
  }
  const addproduct=async(e)=>{
    console.log(e)
    const res= await axios.post('http://localhost:8000/product/add',e,{
      headers:{'token':localStorage.getItem('token')}
    });
    if(res.data){
      setSucess(true);
      timeout();
    }
  }

  const updateproduct=async(e)=>{
     const res=await axios.post('http://localhost:8000/product/')
  }


  const [newItem,setItem]=useState({})
  useEffect(()=>{
  setItem( { title, image, description, category, subcategory, size, color,price });
  },[title, image, description, category, subcategory, size, color,price])
  const handleSubmit=(event)=> {
    event.preventDefault();
    if (type === 'add') {
      addproduct(newItem);
    } else if (type === 'update') {
      updateproduct(newItem);
      // onUpdateItem(item.id, newItem);
    }
  }

  const onclicked=(e)=>{
     setSize([...size,e.target.value]);
     console.log(size)
  }

  return (
      <div className={`${type==='add'||type==='update'?'popup':'popup hidden'}`}>
        <h2>{type === 'add' ? 'Add Item' : 'Update Item'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required value={title} onChange={event => setTitle(event.target.value)} />

          <label htmlFor="image">Image URL</label>
          <input type="file" id="image" required onChange={(e) => onchange(e)} />

          <label htmlFor="description">Description</label>
          <textarea id="description" required value={description} onChange={event => setDescription(event.target.value)}></textarea>

          <label htmlFor="category">Category</label>
          <select id="category" required value={category} onChange={event => setCategory(event.target.value)} name="category">
            <option value="women">women</option>
            <option value="men">men</option>
            <option value="kids">kids</option>
            <option value="home">home</option>
            <option value="beauty">beauty</option>
            <option value="electronics">electronics</option>
            <option value="bag&footwear">bag & footwear</option>
          </select>
          <label htmlFor="subcategory">Subcategory</label>
          <input type="text" id="subcategory" required value={subcategory} onChange={event => setSubcategory(event.target.value)} />

        <label >Size</label>
        <div>
          <div>
          <input type="radio"value='S' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">S</label>
          </div>
          <div>
          <input type="radio"value='L' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">L</label>
          </div>
          <div>
          <input type="radio"value='XL' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">XL</label>
          </div>
          <div>
          <input type="radio"value='XXL' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">XXL</label>
          </div>
          <div>
          <input type="radio"value='XXxL' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">XXXL</label>
          </div>
          <div>
          <input type="radio"value='none' onChange={(e)=>{onclicked(e)}} />
          <label htmlFor="size">none</label>
          </div>
        </div>
          <label htmlFor="color">Color</label>
          <input type="text" required id="color" value={color} onChange={event => setColor(event.target.value)} />

          <label htmlFor="color">Price</label>
          <input type="number" required id="color" value={price} onChange={event => setPrice(event.target.value)} />

          <div className="popup-buttons">
            <input type="submit" value={type === 'add' ? 'Add' : 'Update'} />
            <button type="button" onClick={()=>{setType('')}}>Cancel</button>
            {sucess&&<div className="green">product Added sucessfully</div>}
          </div>
        </form>
      </div>
  );
}

export default Popup;
