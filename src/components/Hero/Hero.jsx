import '../Hero/Hero.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
export default function Hero() {
    return <>
        <section className="hero">
            {/* <h2>About us</h2>  titles and spans*/}
            <div id="myDiv">
                <div className="item1">
                    <h3>About us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa error porro nulla nesciunt blanditiis itaque odio aliquam rem nobis velit corporis, quaerat temporibus facilis ducimus tempore id aperiam reiciendis officiis.
                        Earum itaque fuga quis impedit provident ducimus voluptates soluta cupiditate ipsa amet veniam laborum, quisquam et facere sequi porro unde! Voluptates hic quibusdam earum iste quasi optio. Reprehenderit, ipsa totam!</p>
                </div>
                <div id="secondDiv">
                    <div className="item2"></div>
                    <div className="item3"></div>
                    <div className="item4"></div>
                    <div className="item5"></div>
                </div>
            </div>
        </section>
    </>
}