import React, { Component } from 'react';
import { MdModeEdit } from "react-icons/md";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react"
import './index.css'

class ReactPopup extends Component {
    state = { text: "" }


    onSubmitEdit = (e) => {
        const { text } = this.state
        e.preventDefault()

        const { update } = this.props

        update(text)

    }

    onChangeEdit = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        const { text } = this.state
        return (
            <div>
                <Popup trigger={<button className='button-logo'><MdModeEdit className='imported-logos' /></button>} position="right center">

                    <div className='popup-container'>
                        <form onSubmit={this.onSubmitEdit}>
                            <input onChange={this.onChangeEdit} value={text} />
                            <button type="submit">edit</button>
                        </form>
                    </div>
                </Popup>
            </div >
        )

    }
}

export default ReactPopup