import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Row, Col, Space, Collapse, Table, Button, Dropdown, Menu } from 'antd';
import {
    HomeOutlined, MailOutlined, MessageOutlined, MobileOutlined,
    MenuUnfoldOutlined, DownOutlined, UpOutlined, SettingOutlined
} from '@ant-design/icons';

import { Content } from '../../../components'

import { faqs, schedule } from './data';
import './index.scss';

const { Panel } = Collapse;
const scrollStepInPx = "100";
const delayInMs = "10.50";

const menu = (
    <Menu>
        <Menu.Item danger>
            <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3wDPxPf">
                PENGUMUMAN PENERIMAAN TARUNA/I STIN TAHUN 2021 (DOWNLOAD)
        </a>
        </Menu.Item>
        <Menu.Item danger>
            <a target="_blank" rel="noopener noreferrer" href="/PENERIMAAN TARUNA STIN TAHUN 2021.pdf">
                BROSUR PENDAFTARAN STIN (DOWNLOAD)
        </a>
        </Menu.Item>
        <Menu.Item danger>
            <a target="_blank" rel="noopener noreferrer" href="/images/tahapan ver 2 revisi.jpeg">
                MEKANISME PENDAFTARAN (DOWNLOAD)
            </a>
        </Menu.Item>
        <Menu.Item danger>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Gwir1XYFAgQ">
                MEKANISME PENDAFTARAN (TONTON VIDEO)
        </a>
        </Menu.Item>
    </Menu>
);

const App = () => {
    const wrapperRef = useRef(null);

    const navigations = [
        { text: 'BERANDA', link: '#' },
        { text: 'TENTANG PTB', link: '#aboutptb' },
        { text: 'PERSYARATAN', link: '#requirement' },
        { text: 'TAHAPAN', link: '#stepflow' },
        { text: 'JADWAL', link: '#schedulelist' },
        { text: 'FAQ', link: '#faqsection' },
    ]

    const pageList = [
        {
            value: 'pengumuman',
            text: 'PENGUMUMAN PENERIMAAN TARUNA/I STIN TAHUN 2021 (DOWNLOAD)',
            link: 'https://bit.ly/3wDPxPf'
        },
        {
            value: 'jadwal',
            text: 'BROSUR PENDAFTARAN STIN (DOWNLOAD)',
            link: '/PENERIMAAN TARUNA STIN TAHUN 2021.pdf'
        },
        {
            value: 'mekanisme',
            text: 'MEKANISME PENDAFTARAN (DOWNLOAD)',
            link: '/images/tahapan ver 2 revisi.jpeg'
        },
        {
            value: 'mekanismeVideo',
            text: 'MEKANISME PENDAFTARAN (TONTON VIDEO)',
            link: 'https://www.youtube.com/watch?v=Gwir1XYFAgQ'
        }
    ]

    const columns = [
        {
            title: "No",
            dataIndex: "nomor",
            key: 1,
            width: 40,
        },
        {
            title: "Uraian Kegiatan",
            dataIndex: "description",
            key: 2,
        },
        {
            title: "Keterangan",
            dataIndex: "detail",
            key: 3,
            render: (value, row, index) => {
                const obj = {
                    children: value,
                    props: {}
                };
                if (index === 0) {
                    obj.props.rowSpan = 5;
                    return obj;
                }
                if (index <= 4) {
                    obj.props.rowSpan = 0;
                    return obj;
                }
                return obj;
            }
        },
    ];

    const showMenu = () => {
        const mobileNav = document.querySelector('.menu-mobile-nav');
        mobileNav.classList.remove('hide');
    }

    const loadData = async () => {
    };

    const closeMenu = () => {
        const mmoileNav = document.querySelector('.menu-mobile-nav');
        mmoileNav.classList.add('hide');
    }

    const [thePosition, setThePosition] = React.useState(false);

    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])

    const onScrollStep = () => {

        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);

    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(loadData, []);

    return (
        <div className="page-landing">
            <div className='menu-mobile-nav hide'>
                <nav ref={wrapperRef} id="#mobile-nav" className="mobile-nav d-lg-none">
                    <ul>
                        {navigations.map((m, idx) => {
                            return <li key={idx}><a href={m.link} onClick={closeMenu}>{m.text}</a></li>
                        })}
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                PENGUMUMAN <DownOutlined />
                            </a>
                        </Dropdown>
                    </ul>
                </nav>
                <div className="mobile-nav-overly"></div>
            </div>
            <React.Fragment>
                <div className="app-header-pre">
                    <Row>
                        <Col span={24}>
                            <div className="toolbars">
                                <Row>
                                    <Col span={12}>
                                        <div className="tbr-link" onClick={() => window.open('https://daftarptb.stin.ac.id/', "_blank")}>
                                            Login
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>

            <React.Fragment>
                <div className="app-header landing">
                    <Row>
                        <Col lg={8}>
                            <div className="brand" onClick={() => { window.open('/', '_self') }}>
                                <img src="/images/logo.png" alt="brand" />
                            </div>
                            <div className="title">
                                <div>PENERIMAAN TARUNA BARU</div>
                                <div>SEKOLAH TINGGI INTELIJEN NEGARA</div>
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div className="float-right">
                                <Row>
                                    {navigations.map((m, key) => (
                                        <Col key={key}>
                                            <div className="nav-link">
                                                <a href={m.link}>{m.text}</a>
                                            </div>
                                        </Col>
                                    ))}
                                    <Col key="announcement">
                                        <div className="nav-link">
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                    PENGUMUMAN <DownOutlined />
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <button className='mobile-nav-toggle d-lg-none' onClick={showMenu}>
                        <MenuUnfoldOutlined />
                    </button>
                </div >
            </React.Fragment>

            <Content>
                <div className="panel-banner">
                    <div className="wrapper">
                        <div className='banner-container'>
                            <img src="/images/banner.png" alt="brand" />
                        </div>
                        <div className='wapper-content'>
                            <div className='title'>PENERIMAAN TARUNA BARU </div>
                            <div className='subtitle'>Sekolah Tinggi Intelijen Negara  Tahun 2021</div>
                            <div className='action'>
                                <ul className="menu-action">
                                    <li className="dropdown dropdown-6">
                                        Daftar Pengumuman Penting Terbaru <DownOutlined style={{ marginLeft: '20px' }} />
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                                            {pageList.map((m, idx) => {
                                                return (
                                                    <li key={idx} className="dropdown_item-1">
                                                        <a href={m.link} target="_blank" rel="noopener noreferrer">{m.text}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='aboutptb' className="panel-about">
                    <div className='about-container'>
                        <div className='detail-container'>
                            <Row className='detail-item' gutter={[{ xs: 12, md: 24 }, { xs: 12, md: 24 }]}>
                                <Col md={{ order: 1, span: 12 }} xs={{ order: 2, span: 24 }}>
                                    <ReactPlayer url='https://www.youtube.com/watch?v=LHm7CvkcgLk' width='100%' />
                                </Col>
                                <Col md={{ order: 2, span: 12 }} xs={{ order: 1, span: 24 }}>
                                    <ReactPlayer url='https://www.youtube.com/watch?v=Gwir1XYFAgQ' width='100%' />
                                </Col>
                            </Row>
                            <div className='title'><br></br></div>
                            <div className='title'>TENTANG PTB STIN 2021</div>
                            <div className='subtitle1'>
                                Selamat Datang Peserta Seleksi Penerimaan Taruna/i Baru<br />Sekolah Tinggi Intelijen Negara
                            </div>
                            <Row className='detail-item' gutter={[{ xs: 12, md: 24 }, { xs: 12, md: 24 }]}>
                                <Col md={12} span={24}>
                                    <img className='tr-3' src='/images/landing/ptb_stin_1.png' alt='dasar seleksi' />
                                </Col>
                                <Col md={12} span={24}>
                                    <div className='about-content tr-2'>
                                        <div className='title'>VISI</div>
                                        <div className='subtitle'>
                                            Menjadi Perguruan Tinggi Intelijen bertaraf Internasional (World Class Intelligence College)
                                            yang mempunyai keunggulan dan kewibawaan dalam mendukung terwujudnya keamanan nasional.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='detail-item' gutter={[{ xs: 12, md: 24 }, { xs: 12, md: 24 }]}>
                                <Col md={{ order: 1, span: 12 }} xs={{ order: 2, span: 24 }}>
                                    <div className='about-content tr-4'>
                                        <div className='title'>MISI</div>
                                        <div className='subtitle'>
                                            Menghasilkan lulusan yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa,
                                            berakhlaq mulia, memiliki loyalitas tinggi, mandiri, profesional, dan kompetitif
                                            yang dapat memenuhi kebutuhan pemangku kepentingan dengan menjunjung tinggi kode etik intelijen negara.
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{ order: 2, span: 12 }} xs={{ order: 1, span: 24 }}>
                                    <img className='tr-3' src='/images/landing/ptb_stin_2.png' alt='dasar seleksi' />
                                </Col>
                            </Row>
                            <Row className='detail-item' gutter={[{ xs: 12, md: 24 }, { xs: 12, md: 24 }]}>
                                <Col md={12} span={24}>
                                    <img className='tr-3' src='/images/landing/ptb_stin_3.png' alt='dasar seleksi' />
                                </Col>
                                <Col md={12} span={24}>
                                    <div className='about-content tr-4'>
                                        <div className='title'>KEUNGGULAN KULIAH DI STIN</div>
                                        <div className='subtitle'>
                                            <ol>
                                                <li>Selama kuliah, tidak dipungut biaya apapun.</li>
                                                <li>Tinggal di Asrama, mendapat konsumsi dan seragam.</li>
                                                <li>Setelah lulus kuliah, diangkat menjadi CPNS.</li>
                                                <li>Fasilitas pendidikan lengkap dan modern.</li>
                                                <li>Berkesempatan berlatih menjadi Indonesian Cyber Task Force dan ahli dalam bidang Biomedical Hazard.</li>
                                                <li>Terakreditasi unggul oleh BAN-PT</li>
                                            </ol>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div id='requirement' className='requirement-container'>
                    <div className='requirement-container'>
                        <div className='title'>Persyaratan Pendaftaran</div>
                        <div className='subtitle'>
                            Calon Taruna/i Sekolah Tinggi Intelijen Negara
                        </div>
                        <div className='requirement-box tr-1'>
                            <div className='box-title'>Persyaratan Umum</div>
                            <div className='box-body'>
                                <ol>
                                    <li>Warga Negara Indonesia (WNI) yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, dan setia kepada Negara Kesatuan Republik Indonesia berdasarkan Pancasila dan Undang-Undang Dasar Negara Republik Indonesia tahun 1945.</li>
                                    <li>Tidak pernah terlibat tindak pidana</li>
                                    <li>Berkelakuan baik yang dibuktikan dengan Surat Keterangan Catatan Kepolisian (SKCK)</li>
                                    <li>Berpendidikan minimal SMA/SMK/MA <strong>(bukan lulusan paket C)</strong> dengan ketentuan :
                                        <ol >
                                            <li>Lulusan SMA/SMK/MA tahun 2019 dan 2020, nilai rata-rata ijazah minimal 80 (delapan puluh)</li>
                                            <li>Bagi lulusan SMA/SMK/MA tahun 2021, nilai rata-rata rapor semester 1 s/d semester 5 minimal 75 (tujuh puluh lima)</li>
                                        </ol>
                                    </li>
                                    <li>Belum pernah menikah dan bersedia tidak menikah selama masa pendidikan</li>
                                    <li>Belum pernah melahirkan (perempuan) dan belum pernah punya anak biologis (laki-laki)</li>
                                    <li>Tidak bertato dan/atau memiliki bekas tato</li>
                                    <li>Tidak bertindik dan/atau memiliki bekas tindik pada bagian tubuh yang tidak lazim (perempuan)</li>
                                    <li>Tidak bertindik dan/atau memiliki bekas tindik pada bagian tubuh manapun (laki-laki)</li>
                                    <li>Sehat jasmani, rohani dan tidak pernah mengalami patah tulang</li>
                                    <li>Apabila berkacamata, maksimal ukuran 1 baik + (plus) atau - (minus)</li>
                                    <li>Tidak buta warna</li>
                                    <li>Tinggi badan minimal (berat badan seimbang menurut ketentuan berlaku)
                                        <ul>
                                            <li>Putra : 165 cm</li>
                                            <li>Putri : 160 cm</li>
                                        </ul>
                                    </li>
                                    <li>Usia pada tanggal 31 Desember 2021 serendah-rendahnya 16 tahun dan tidak lebih dari 21 tahun (dibuktikan dengan Akte Kelahiran/Surat Keterangan Lahir)</li>
                                    <li>Mendapatkan persetujuan orangtua atau wali yang dibuktikan dengan surat pernyataan orangtua/wali</li>
                                    <li>Peserta seleksi penerimaan Taruna/i STIN tidak dipungut biaya kecuali biaya mengikuti SKD</li>
                                </ol>
                            </div>
                        </div>
                        <div className='requirement-box tr-2'>
                            <div className='box-title'>Persyaratan Administrasi</div>
                            <div className='box-body'>
                                <ol>
                                    <li>Surat Izin Orang Tua/Wali.</li>
                                    <li>Fotocopy ijazah untuk lulusan 2019 dan 2020</li>
                                    <li>Surat keterangan lulus dari sekolah bagi lulusan tahun 2021.</li>
                                    <li>Pas Foto dengan ketentuan.
                                        <ul>
                                            <li>Pasfoto 4x6 (1buah) :
                                                <ul>
                                                    <li>Putra latar Merah</li>
                                                    <li>Putri latar Biru</li>
                                                </ul>
                                            </li>
                                            <li>Foto berwarna seluruh badan ukuran postcard (Pakaian Putih dengan bawahan hitam bahan) tampak depan, tampak samping kanan kiri dan tampak belakang</li>
                                        </ul>
                                    </li>
                                    <li>Fotocopy Akta Kelahiran/Surat Keterangan Kelahiran/Kenal Lahir, Kartu Keluarga (KK) dan Kartu BPJS.</li>
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='registflow-container'>
                    <div className='title'>Alur Pendaftaran SSCASN Sekolah Kedinasan 2021</div>
                    <div className='subtitle'>
                        Calon peserta dapat mendaftarkan diri di Portal SSCASN DIKDIN dengan <br /> menekan tombol dibawah ini :
                    </div>
                    <div className='btn-regist-container'>
                        <Button className='btn-regist' onClick={() => window.open('https://dikdin.bkn.go.id/', "_blank")}>Registrasi Calon Pendaftar</Button>
                    </div>
                    <div className='image-container'>
                        <img src='/images/landing/ptb_register_1.png' alt='alur pendaftaran' />
                    </div>
                </div>
                <div id='stepflow' className='stepflow-container'>
                    <div className='title'>Tahapan Seleksi Penerimaan Taruna Baru STIN 2021</div>
                    <div className='subtitle'>
                        Jika para pendaftar/peserta di tiap tes nya sampai dengan tes akhir memenuhi persyaratan yang telah<br />
                            ditetapkan maka dapat dinyatakan lulus.
                    </div>
                    <div className='image-container'>
                        <img src='/images/landing/ptb_register_2.png' alt='alur pendaftaran' />
                    </div>
                </div>
                <div id='schedulelist' className='schedule-container'>
                    <div className='title'>Uraian Kegiatan Penerimaan Taruna Baru STIN 2021</div>
                    <div className='schedule-list'>
                        <Table
                            columns={columns}
                            dataSource={schedule.map((d, i) => ({ key: i, ...d }))}
                            pagination={false}
                            bordered={true}
                            size='small'
                        />
                    </div>
                </div>
                <div id='faqsection' className='faq-container'>
                    <div className='title'>Pertanyaan yang Sering Ditanyakan </div>
                    <div className='subtitle'>
                        Berikut ringkasan daftar pertanyaan atau bantuan bagi siapapun yang ingin mengetahui lebih lanjut tentang PTB STIN 2021
                    </div>
                    <div className='faq-box tr-1'>
                        <Collapse ghost expandIconPosition='right'>
                            {faqs.map((m, idx) => {
                                return (
                                    <Panel header={`Q : ${m.title}`} key={idx}>
                                        {Array.isArray(m.content) && m.content.length > 0 ?
                                            <Collapse className='collapse-child' ghost expandIconPosition='right'>
                                                {m.content.map((child, key) => {
                                                    return (
                                                        <Panel header={child.title} key={key}>
                                                            {child.children}
                                                        </Panel>
                                                    )
                                                })}
                                            </Collapse>
                                            : m.content
                                        }
                                    </Panel>
                                )
                            })}
                        </Collapse>
                    </div>
                </div>
            </Content>
            <div className="panel-footer">
                <div className='footer-title'>HELP DESK</div>
                <div className="footer-info">
                    <Row gutter={[18, 18]}>
                        <Col lg={6} span={24}>
                            <Space align='start' size='large'>
                                <div className='footeritem-icon'>
                                    <HomeOutlined />
                                </div>
                                <div>
                                    <div className='footeritem-title'>Sekolah Tinggi Intelijen Negara</div>
                                    <div className='footeritem-content'>
                                        Sumur Batu, Babakan <br />
                                    Madang Bogor, Jawa Barat 16810
                                </div>
                                </div>
                            </Space>

                        </Col>
                        <Col lg={6} span={24}>
                            <Space align='start' size='large'>
                                <div className='footeritem-icon'>
                                    <MobileOutlined />
                                </div>
                                <div>
                                    <div className='footeritem-title'>
                                        (0251) 8271471 - (0251) 8271479 <br />
                                    (021) 7917 9619
                                </div>
                                    <div className='footeritem-content'>
                                        Hari dan Jam Kerja 08:00 - 17:00 WIB
                                </div>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={6} span={24}>
                            <Space align='start' size='large'>
                                <div className='footeritem-icon'>
                                    <MessageOutlined />
                                </div>
                                <div>
                                    <div className='footeritem-title'>
                                        <a href='https://wa.me/+6281223849839'>(0812) 2384 9839</a> <br />
                                        <a href='https://wa.me/+6281223849840'>(0812) 2384 9840</a>
                                    </div>
                                    <div className='footeritem-content'>
                                        WhatsApp
                                </div>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={6} span={24}>
                            <Space align='start' size='large'   >
                                <div className='footeritem-icon'>
                                    <MailOutlined />
                                </div>
                                <div>
                                    <div className='footeritem-title'>
                                        <a href='mailto:info.ptb@stin.ac.id'>info.ptb@stin.ac.id</a> <br />
                                        <a href='mailto:aduan.pendaftaran@stin.ac.id'>aduan.pendaftaran@stin.ac.id</a> <br />
                                        <a href='mailto:aduan.tahapanseleksi@stin.ac.id'>aduan.tahapanseleksi@stin.ac.id</a>
                                    </div>
                                    <div className='footeritem-content'>
                                        Silahkan hubungi kami apabila ada pertanyaan sehubungan Penerimaan.
                                    </div>
                                </div>
                            </Space>
                        </Col>
                    </Row>
                </div>
            </div >
            {/* <ButtonUp /> */}
            <Button className='back-top' onClick={scrollToTop}>
                <UpOutlined />
                <div>TOP</div>
            </Button>
        </div>
    );
}

export default App;