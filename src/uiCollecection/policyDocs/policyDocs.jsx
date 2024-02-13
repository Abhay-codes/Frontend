
import React from 'react';
import axios from 'axios'; 
//import   pdfurl from  "/home/abhay/Documents/project_investwell/frontend/public/pdf/file-sample_150kB.pdf"
import { useLocation } from 'react-router-dom';

//const directory="/home/abhay/Documents/project_investwell/frontend/public/pdf"

const PolicyDocs= ()=> {
  const location = useLocation();
  const policyArray =location.state.props
  
  

    const PDFviewer=async()=>{
        /*const pdfUrl="frontend/src/media/pdf/file-sample_150kB.pdf";
        const anchor = document.createElement('a');
       anchor.href = pdfUrl;
       anchor.download = 'downloaded_pdf.pdf';
         anchor.click();*/
        //const pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
        const res = await axios.get('http://localhost:8000/PDFdata');
        //console.log(res.data.path)
        const path =res.data.result[0]
        const val  = path.split("/");
        console.log(val)
        const file =val[val.length-2]+ '/' +val[val.length-1]
        console.log(file)
        window.open(file, "_blank")

   }
    
    return (
      <>
        <table className='policyDocs'>
          <caption>POLICY DOCS</caption>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Policy Number</th>
               <th>Action</th> 
            </tr>
          </thead>
          <tbody>
              {
                policyArray.map(policy => {
                  return (
                    <tr>
                      <td>{policy.id}</td>
                      <td>{policy.fileName}</td>
                      <td><button className="policy-btn" onClick={PDFviewer}>PDF</button>
                      
                      
                      </td>


                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </>
    );
  }

export default PolicyDocs;