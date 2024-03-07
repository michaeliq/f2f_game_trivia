import QRCode from "react-qr-code";

const QrCodeGen = ({text}) => {
    
    return (
        <QRCode className="qr-code-box" value={text}/>
    )
};

export default QrCodeGen;