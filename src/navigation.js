import React, { Component } from "react";
import axios from 'axios';
import { Layout, Menu, Breadcrumb, PageHeader, Typography, Modal } from 'antd';

import "./custom.css";
import Tekkom from './tekkom';
import Kartu44 from './kartu44';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default class navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // drinks: [],
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
        if (this.state.nama !== "" && this.state.logo_url !== "" && !this.state.deskripsi !== "") {
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

    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2" onClick={this.handleTambahMinuman}>Tambah Menu</Menu.Item>
                        </Menu>
                    </Header>
                    <PageHeader style={{ padding: '0 50px' }}>
                        {/* <Breadcrumb style={{ margin: '0 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                        <center>
                            <Title style={{ padding: '50px 0' }}>Katalog Minuman Enak</Title>
                        </center>
                    </PageHeader>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Tekkom />
                        </div>
                    </Content>
                    <Kartu44 />
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                <Modal
                    title="Tambah Menu"
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
                            placeholder="Nama Menu"
                            onChange={this.handleNama}
                        />
                        <br />
                        <p style={{ marginTop: '20px' }}>Foto : </p>{" "}
                        <input src
                            placeholder="URL Gambar Menu"
                            onChange={this.handleFoto}
                        />
                        <br />
                        <p style={{ marginTop: '20px' }}>Deskripsi : </p>{" "}
                        <input type="text"
                            placeholder="Deskripsi Menu"
                            onChange={this.handleDeskripsi}
                        />
                        <br />
                    </div>
                </Modal>
            </div>
        );
    }
}