import { Link } from "react-router";
import { FaAngleDown, FaArrowRight } from 'react-icons/fa6';
import demo1Img from '@/assets/img/demo/vl-demo1.1.png';
import demo2Img from '@/assets/img/demo/vl-demo-1.2.png';
import demo3Img from '@/assets/img/demo/vl-demo-1.3.png';
import demo4Img from '@/assets/img/demo/vl-demo-1.4.png';
import demo5Img from '@/assets/img/demo/vl-demo-1.5.png';
import { Col, Row } from 'react-bootstrap';
const TopMenu = () => {
  return <ul>
            <li>
                <a href="/">Home </a>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/events">Events </a>
            </li>
            <li><a href="/blog">Blogs </a>
            </li>
            <li><a href="/contact">Contact </a>
            </li>
            <li><a href="/cause">Causes </a>
            </li>
        </ul>;
};
export default TopMenu;