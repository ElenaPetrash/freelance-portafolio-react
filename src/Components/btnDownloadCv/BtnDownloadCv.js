

const BtnDownloadCv = ({myCv}) => {
    return ( 
        <div>
        <a href={myCv} download className="btn">
          Download CV
        </a>
      </div>
     );
}
 
export default BtnDownloadCv;