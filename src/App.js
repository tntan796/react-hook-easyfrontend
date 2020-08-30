import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './services/firebase.service';
import ReactLoading from 'react-loading';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MenuComponent from './components/menu/menu.component';

function App() {
  let [fushushus, setFushushus] = useState([]);
  let [loading, setLoading] = useState(false);
  let first, last;
  
  let nextPage = (last) => {
    return firebase.firestore().collection('Fushushu').orderBy('id').startAfter(last).limit(12).get();
  }

  let prevPage = (first) => {
    return firebase.firestore().collection('Fushushu').orderBy('id').endBefore(first).limitToLast(12).get();
  }

  useEffect(() => {
    setLoading(true);
    async function getFushushusList() {
      let fushushusTemp = await firebase.firestore().collection('Fushushu').orderBy('id').limit(12).get();
      fushushusTemp = fushushusTemp.docs.map(stu => ({
        id: stu.id,
        ...stu.data()
      }));
      setFushushus([...fushushusTemp]);
      console.log(fushushusTemp);
      setLoading(false);
    }
    getFushushusList();
  }, []);

  let getFushushusElm = () => {
    return fushushus.map(item => {
      return (
        <div className="card_number" key={item.id}>
            <div className="slide-image">
              <Carousel showThumbs={false} width={'250px'} height={'250px'}>
                <div>
                  <img src={item.images[0]} alt="avatar" className="avatar"/>
                </div>
              </Carousel>
            </div>
            <div className="footer">  
              <h3 className="name">{item.id}</h3>
              <div className="method">
                <button className="btn btn-dropbox btn-round" title="Hiển thị">
                  <i className="far fa-eye"></i>
                </button>
                <button className="btn btn-dropbox btn-round" title="Ẩn">
                  <i className="far fa-eye-slash"></i>
                </button>
                <button className="btn btn-success btn-round" title="Thêm mới">
                  <i className="far fa-calendar-plus"></i>
                </button>
                <button className="btn btn-dropbox btn-round" title="Sửa">
                  <i className="far fa-edit"></i>
                  </button>
                <button className="btn btn-google btn-round" title="Xóa">
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
        </div>
      )
    })
  }

  return (
    <div className="container">
      <MenuComponent></MenuComponent>
      <div className="fushushus">
        {getFushushusElm()}
      </div>
      {
        loading ? <ReactLoading className="loading" type='spokes' color='dodgerblue' height={'10%'} width={'10%'} /> : ''
      }
      
    </div>
  );
}
export default App;
