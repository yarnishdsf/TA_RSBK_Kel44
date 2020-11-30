import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            visible: false,
            id: "",
            nama: "",
            logo_url: "",
            deskripsi: "",
            url: "https://my-firstdrink-api.herokuapp.com/drinks",
        };
    }

    handleButton = (nama) => {
        alert(nama);
    };

    handleTambahMinuman = () => {
         this.setState({
            visible: true,
        });
    };

    handleNama = (e) => {
        this.setState({
            nama: e.target.value,
        });
        console.log(this.state.nama);
    };

    handleFoto = (e) => {
         this.setState({
             logo_url: e.target.value,
         });
         console.log(this.state.logo_url);
    };

    handleDeskripsi = (e) => {
         this.setState({
             deskripsi: e.target.value,
         });
         console.log(this.state.deskripsi);
    };

    handleSubmit = () => {
         if (this.state.nama !== "" && this.state.nim !== "" && !this.state.asal !== "") {
             axios({
                 method: "post",
                 url: "https://my-firstdrink-api.herokuapp.com/drinks",
                 headers: {
                 accept: "*/*",
                 },
                 data: {
                     nama: this.state.nama,
                     logo_url: this.state.logo_url,
                     deskripsi: this.state.deskripsi,
                 },
             }).then((data) => {
                 alert("berhasil menambahkan");
                 window.location.reload();
             }).catch((error) => {
                 alert("gagal gaes :( ");
             });
         }
         else {
             alert("pastikan semua kolom terisi");
         }
     };

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
            url: "https://my-firstdrink-api.herokuapp.com/drinks",
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
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (<div>
            <div className="boxWhite">
                <center>
                    <h1>Kumpulan Minuman Enak</h1>
                </center>
                {<center>
                    <button onClick={this.handleTambahMinuman}>Tambah Minuman</button>
                </center> }
                {<Modal
                    title="Tambah Minuman"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={() => this.setState({
                        visible: false
                    })}
                    width={500}
                >
                    <div style={{ textAlign: "center" }}>
                        <p>Nama : </p>{" "}
                        <input type="text"
                            placeholder="nama"
                            onChange={this.handleNama}
                        />
                        <br />
                        <p>Foto : </p>{" "}
                        <input src
                            placeholder="logo_url"
                            onChange={this.handleFoto}
                        />
                        <br />
                        <p>Deskripsi : </p>{" "}
                        <input type="text"
                            deskripsi="deskripsi"
                            onChange={this.handleDeskripsi}
                        />
                        <br />
                    </div>
                </Modal> }

                {/* {this.state.tekkom.map((results, index) => { */}
                {this.state.drinks.map((results, index) => {
                    return (
                        <center>
                            <div className="card" key={results.id} style={{width: "20%", marginBottom: "50px"}}>
                                <img src={results.logo_url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{results.nama}</h5>
                                    <p className="card-text">{results.deskripsi}</p>
                            {/* <h6 className="card-subtitle mb-2 text-muted">
                                Nim : {results.nim}
                                </h6>
                                <p className="card-text">Asal : {results.asal}</p> */}
                                </div>
                            {/* <button className="button" onClick={() => this.handleButton(results.nama)}> */}
                            {/* <button className="button" onClick={() => this.handleUpdate(results._id)}> */}
                            { <button className="button" onClick={() => this.handleDelete(results.id)}>
                                {" "}
                                Hapus Aku
                            </button>}
                            </div>
                        </center>
                    );
                })}
            </div>
        </div>);
    }
}