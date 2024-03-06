import QRCode from "react-qr-code";

const QrCodeGen = ({text}) => {
    
    return (
        <QRCode value={text}/>
    )
};

export default QrCodeGen;