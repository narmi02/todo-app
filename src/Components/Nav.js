import React, { useState } from 'react'

const Nav = () => {
    return (
        <>
            <nav className="navbar " style={{ fontFamily: ` "Ubuntu Mono", monospace`,backgroundColor:'rgb(250, 240, 255)'}}>
                <div className="container-fluid">
                    <a className="navbar-brand px-3"  >myTodo</a>
                </div>
            </nav>

        </>
    )
}

export default Nav
