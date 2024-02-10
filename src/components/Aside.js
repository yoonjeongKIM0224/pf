import { BrowserRouter, Link } from "react-router-dom";

export default function Aside(){
    const menus = ['About Me', 'Projects', 'Components', 'Design', 'Contact Me'];

    return (
        <BrowserRouter>
            <>
                <aside className="aside">
                    <div className="aside_wrap">
                        <ul className="aside_list">
                            <li className="item">
                                <Link to="/aboutme" className="item_cont">About Me</Link>
                            </li>
                            <li className="item">
                                <Link to="/projects" className="item_cont">Projects</Link>
                            </li>
                            <li className="item">
                                <Link to="/components" className="item_cont">Components</Link>
                            </li>
                            <li className="item">
                                <Link to="/design" className="item_cont">Design</Link>
                            </li>
                            <li className="item">
                                <Link to="/contactme" className="item_cont">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </>
        </BrowserRouter>
    )
}