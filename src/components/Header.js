import { BrowserRouter, Link } from "react-router-dom";
import '../style/import.scss';
import '../style/layout.scss';

export default function Header(){
    const lnb = [
        {
            tit: 'velog',
            link: 'https://velog.io/@gnoejnooy/posts'
        },
        {
            tit: 'github',
            link: 'https://github.com/yoonjeongKIM0224'
        },
    ]

    return (
        <BrowserRouter>
            <>
                <header className="header">
                    <div className="header_wrap">
                        <h1 className="header_logo">
                            <Link to="/" className="logo_item">김윤정</Link>
                        </h1>
                        <ul className="header_nav_list">
                            {lnb.map((item, idx) => (
                                <li className="item" key={idx}>
                                    <Link to={item.link} target="_blank" title="새창열림" className="item_cont">{item.tit}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
            </>
        </BrowserRouter>
    )
}