import { BrowserRouter, Link } from "react-router-dom";

export default function Aside(){
    const menus = [
        {
            tit: 'About Me',
            link: '/'
        },
        {
            tit: 'Projects',
            link: '/'
        },
        {
            tit: 'Components',
            link: '/'
        },
        {
            tit: 'Design',
            link: '/'
        },
        {
            tit: 'Contact Me',
            link: '/'
        },
    ]

    return (
        <BrowserRouter>
            <>
                <aside className="aside">
                    <div className="aside_wrap">
                        <ul className="aside_list">
                            {menus.map((item, idx) => (
                                <li key={idx} className="item">
                                    <Link to={item.link} className="item_cont">
                                        <span className="txt">{item.tit}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </>
        </BrowserRouter>
    )
}