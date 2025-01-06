import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

function Slider() {
    return (
        <section style={{ margin: 'auto', boxShadow: '0px 5px 10px black' }} className='carousel'>
            <Carousel style={{ margin: 'auto' }}>
                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={image1}
                            alt="First slide"
                            style={{ width: '100%', height: '800px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                                zIndex: 1,
                            }}
                        ></div>
                        <Carousel.Caption
                            style={{
                                position: 'absolute',
                                top: '59%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                color: 'white', // Ensure text is visible
                                textAlign: 'center',
                            }}
                        >
                            <h1>Hey there</h1>
                            <p>Here the fun begins</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={image2}
                            alt="Second slide"
                            style={{ width: '100%', height: '800px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1,
                            }}
                        ></div>
                        <Carousel.Caption
                            style={{
                                position: 'absolute',
                                top: '59%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={image3}
                            alt="Third slide"
                            style={{ width: '100%', height: '800px', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1,
                            }}
                        ></div>
                        <Carousel.Caption
                            style={{
                                position: 'absolute',
                                top: '59%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Slider;
