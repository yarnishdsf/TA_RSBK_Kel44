import React, { useState, useEffect, Component } from "react";
import { Card, Col, Row } from 'antd';
import { Typography, Button } from 'antd';
import { MehOutlined, SmileTwoTone } from '@ant-design/icons';

import "antd/dist/antd.css";
import Kartom from './praktikan';
import HKartom from './header-praktikan';

// import './App.css';

const { Title } = Typography;

function Kartu(props) {
    const [showIcon, setIcon] = useState(true);

    const changeIcon = () => {
        setIcon(!showIcon);
    };

    useEffect(() => {
        if (showIcon === false) {
            alert(`Terima kasih atas feedback positif dari Anda`);
        }
    }, [showIcon]);

    return (
        <div style={{ padding: '10px 10px' }}>
            <Title level={4}>{props.nama}</Title>
            <Title level={4} style={{ marginTop: '0' }}>{props.nim}</Title>
            <Title level={5} style={{ marginTop: '0' }}>{props.kel}</Title>
            <Button 
                type="text" 
                size="large" 
                shape="circle"
                icon={ showIcon === true ? <MehOutlined /> : <SmileTwoTone /> }
                // icon={props.sIcon ? <MehOutlined /> : <SmileTwoTone />} 
                onClick={changeIcon}
            />
        </div>
    );
}

export default class Kartu44 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kel: 'Kelompok 44',
            prak: ['1', '2'],
            nama: ['M. Rizqi Alfani', 'Yarnish Dwi Sagita F.'],
            nim: ['21120117140007', '21120117130049'],
            sIcon: true
        };
    }
    

    render() {
        return (
            <div className="site-card-wrapper" style={{ padding: '50px 50px 0 50px' }}>
                <Row gutter={8}>
                    <Col span={12}>
                        {/* <Kartom id={'kartu'} title={'PRAKTIKAN ' + this.state.prak[0]} bordered={false} style={{  }}> */}
                        <Kartom background='white' border='2px solid #80DEEA'>
                            <HKartom background='#E0F7FA' font='#80DEEA' bottom='2px solid #80DEEA'>{'PRAKTIKAN ' + this.state.prak[0]}</HKartom>
                            <Kartu nama={this.state.nama[0]} nim={this.state.nim[0]} kel={this.state.kel}/>
                        </Kartom>
                    </Col>
                    <Col span={12}>
                        <Kartom background='white' border='2px solid #EF9A9A'>
                            <HKartom background='#FFEBEE' font='#EF9A9A' bottom='2px solid #EF9A9A'>{'PRAKTIKAN ' + this.state.prak[1]}</HKartom>
                            <Kartu nama={this.state.nama[1]} nim={this.state.nim[1]} kel={this.state.kel} />
                        </Kartom>
                    </Col>
                </Row>
            </div>

        );
    }
} 