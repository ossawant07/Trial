import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.footerSection}>
                    <h2>About Us</h2>
                    <p>We are a leading e-commerce platform offering a wide range of products to cater to all your needs. Our mission is to provide the best shopping experience.</p>
                </div>
                
                <div style={styles.footerSection}>
                    <h2>Contact Us</h2>
                    <p>Email: evaraa@gmail.com</p>
                    <p>Phone: 0123456789</p>
                    <p>Address: Silicon Valley, Bangalore</p>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <p>&copy; 2024 Evara | Designed with <span style={{ color: '#e25555' }}>&hearts;</span> by Evara</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#431568',
        padding: '20px 0',
        fontcolor: 'white',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        marginTop: '50px',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px',
        textAlign: `center`,
        fontSize: '58px',
        fontStretch: `expanded`,
        fontFamily: "Nunito Sans", 
        fontOpticalSizing: `auto`,
        fontWeight: '100px',
        fontStyle: `normal`,
    },
    footerSection: {
        flex: '1',
        margin: '10px',
        color: 'white',
        fontSize: '15px',
    },
    list: {
        listStyle: 'none',
        padding: '0',
    },
    listItem: {
        margin: '10px 0',
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff',
        transition: 'color 0.3s',
    },
    footerBottom: {
        backgroundColor: '#f6ecf2',
        color: 'black',
        padding: '10px 0',
    },
    h2: {
        color: '#ffffff',
    },
};

export default Footer;
