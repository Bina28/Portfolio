import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../Assets/img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id="home">
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my porfolio</span>
        <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
       
        <p>
  I am a curious and engaged person, always seeking new knowledge. What drives me the most is the opportunity to learn something new, which is why the IT industry attracts me—there is always something new to discover and master. I am a quick learner and thrive on challenges.
</p>
<p>
  For me, it is especially motivating to start IT projects where I don't know all the answers in advance. Seeing the result of hard work when the project is completed and works as it should gives a great sense of accomplishment. I enjoy challenging myself and believe that it is through challenges that one learns the most.
</p>
<p>
  In my free time, I stay active through sports, enjoy walking in nature, and immerse myself in new stories via books and audiobooks. I also dedicate time to programming and exploring emerging technologies. I find it exciting to dive into something new, whether it’s related to my work, studies, or personal hobbies.
</p>
<p>
  I am always eager to embrace new opportunities to learn and grow, both professionally and personally!
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
