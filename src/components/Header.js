import { BrowserRouter, Link } from "react-router-dom";
import '../style/import.scss';
import '../style/layout.scss';

export default function Header(){
    return (
        <BrowserRouter>
            <>
                <header className="header">
                    <div className="header_wrap">
                        <h1 className="header_logo">
                            <Link to="/" className="logo_item">김윤정</Link>
                        </h1>
                        <ul className="header_nav_list">
                            <li className="item">
                                <a href="https://velog.io/@gnoejnooy/posts" target="_blank" title="새창열림" className="item_cont">velog</a>
                            </li>
                            <li className="item">
                                <a href="https://github.com/yoonjeongKIM0224" target="_blank" title="새창열림" className="item_cont">github</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        </BrowserRouter>
    )
}