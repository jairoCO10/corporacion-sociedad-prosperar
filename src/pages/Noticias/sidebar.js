import React from "react";
import "../../components/style.css"

function Sidebar() {
    return (
        <div className="col-md-2">
            <div className="div_left">
                <ul className="lista_Menu">
                    <li className="item0">
                        <a href="/noticias">Noticias</a>
                    </li>

                    <li className="item2">
                        <a href="/donaciones">Donaciones</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;
