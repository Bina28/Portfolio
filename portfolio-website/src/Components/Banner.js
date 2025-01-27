import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../Assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum]= useState(0);
  const[isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web developer", "Web designer", "Fullstack-developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random()*100);
  const period =2000;

  useEffect(() =>{
    let ticker = setInterval(()=>{
tick();
    },delta)
    return () => {clearInterval(ticker)};
  }, [text])

const tick =()=>{
  let i= loopNum%toRotate.length;
  let fullText=toRotate[i];
  let updateText=isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

  setText(updateText);

  if(isDeleting){
    setDelta(prevDelta => prevDelta/2)
  }

  if(!isDeleting && updateText===fullText){
    setIsDeleting(true);
    setDelta(period);
  }else if(isDeleting && updateText===''){
setIsDeleting(false);
setLoopNum(loopNum+1);
setDelta(500);
  }
}

    return (
        <section className="banner" id="home">
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my porfolio</span>
        <h1>{`Hi I'm webdecoded `}<span className="wrap">{text}</span></h1>
       
        <p>
  I am a curious and engaged person, always seeking new knowledge.
   What drives me the most is the opportunity to learn something new, 
   which is why the IT industry attracts me—there is always something new to discover and master.
    I am a quick learner and thrive on challenges.
</p>

<button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
 </Col>
 <Col xs={12} md={6} xl={5}>
 <img src={headerImg}  alt="Header Img"/>
 </Col>
    </Row>
</Container>
        </section>
    )
}
