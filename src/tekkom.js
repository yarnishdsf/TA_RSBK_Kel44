import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import "./custom.css";

export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            visible: false,
            // id: "",
            // nama: "",
            // logo_url: "",
            // deskripsi: "",
            // url: "https://my-firstdrink-api.herokuapp.com/drinks",
        };
    }

    handleDelete = (id) => {
        axios({
            method: "delete",
            url: "https://my-firstdrink-api.herokuapp.com/drinks/" + id,
            headers: {
                accept: "*/*",
            },
        }).then((data) => {
            alert('data berhasil dihapus');
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        });
    };

    // handleUpdate = (_id) => {
    //     axios({
    //         method: "update",
    //         url: this.state.url + _id,
    //         headers: {
    //             accept: "*/*",
    //         },
    //     }).then((data) => {
    //         alert('data berhasil dihapus');
    //         window.location.reload();
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    componentDidMount() {
        axios({
            method: "get",
            url: "https://my-firstdrink-api.herokuapp.com/drinks/",
            // url: "https://cors-anywhere.herokuapp.com/https://dev.farizdotid.com/api/purwakarta/wisata",
            headers: {
                accept: "*/*",
            },
        }).then((data) => {
            console.log(data.data);
            this.setState({
                drinks: data.data,
                nama: data.data.nama,
                logo_url: data.data.logo_url,
                deskripsi: data.data.deskripsi
                // drinks: data.data.wisata,
                // nama: data.data.wisata.nama,
                // logo_url: data.data.wisata.gambar_url,
                // deskripsi: data.data.wisata.kategori
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (<div>
            <div>
                {<center>
                    {/* <button onClick={this.handleTambahMinuman}>Tambah Minuman</button> */}
                </center>}
                <div className="row justify-content-center" style={{ margin: '50px 0 20px 0' }}>
                    {/* {this.state.tekkom.map((results, index) => { */}
                    {this.state.drinks.map((results, index) => {
                        return (
                            <div className="card" key={results.id} style={{ width: "20%", marginBottom: "50px" }}>
                                <img src={results.logo_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <center>
                                        <h5 className="card-title">{results.nama}</h5>
                                    </center>
                                    <center>
                                        <p className="card-text">{results.deskripsi}</p>
                                    </center>
                                    {/* <h6 className="card-subtitle mb-2 text-muted">
                                    Nim : {results.nim}
                                    </h6>
                                    <p className="card-text">Asal : {results.asal}</p> */}
                                </div>
                                {/* <button className="button" onClick={() => this.handleButton(results.nama)}> */}
                                {/* <button className="button" onClick={() => this.handleUpdate(results._id)}> */}
                                <Button type="primary" onClick={() => this.handleDelete(results.id)} danger>
                                    {" "}
                                    Hapus Menu
                                </Button>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>);
    }
}