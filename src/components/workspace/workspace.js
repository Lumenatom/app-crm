import React, { Component } from "react";
import Header from "./header/header";
import Nav from "./nav/nav";
import style from "./workspace.module.css";
import BarcodeReader from 'react-barcode-reader';
import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "../homePage/homePage";
import Dashboard from "./dashboard/dashboard";
import Shop from "./shop/shop";



class Workspace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        console.log(data)
        alert(data)
        this.setState({
            result: data,
        })
    }


    render() {
        return (
            <div className={style.workspace}>
                <Nav />
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
                <BarcodeReader
                    onError={this.handleError}
                    onScan={this.handleScan}
                />

            </div>
        )
    }

}

export default Workspace;