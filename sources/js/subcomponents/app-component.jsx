import React, {Component} from "react";
import html2canvas from "html2canvas/dist/html2canvas";
import jsPDF from "jspdf/dist/jspdf.min";
import {EditorComponent} from "./editor-component";

const FILENAME = "my_document_from_html.pdf";
const PDF_CONTAINER_ID = "pdf-container";

export class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  downloadAsPdf() {
    html2canvas(document.getElementById(PDF_CONTAINER_ID))
      .then((canvas) => {
        const img_as_dataurl = canvas.toDataURL('image/png');
        const jspdf = new jsPDF();
        jspdf.addImage(img_as_dataurl, 'PNG', 0, 0);
        jspdf.save(FILENAME);
      })
    ;
  }

  render() {
    return (
      <div className="App">
        <div className="App__primary-controls">
          <button className="App__download-btn" onClick={this.downloadAsPdf}>Download</button>
        </div>
        <EditorComponent pdf_container_id={PDF_CONTAINER_ID}/>
    </div>);
  }
}