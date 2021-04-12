import react from react
import './Styles.css'
import image from /subfolder/imageInSrc.jpg


function App() {
  return (
<div style={{border:"solid 1px black" , maxwidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br>

<img src={"/imageInSrc.jpg"} />

</br>

<img src={"/subfolderPublic/imageInPublic.jpg"} />


<video  width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

</div>

  );
};

export default App;
