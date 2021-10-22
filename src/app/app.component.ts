import { Component, Output, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:1337";

// const socket = socketIOClient(ENDPOINT);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real time collaborative document editor';

  constructor() { }

  content:string = ``;
  documentId:string = ``;
  docToEdit: any;
  reset:string = ``;
  updateDocs:string = ``;
  auth: boolean = false;
  token: any = null;
  // headers: any = this.httpOptions;
  user: object = {
    // user: {
    //   username: "frida"
    // }
  };
  type: any = "doc";
  comment: any = null;


  resetAll(reset: any) {
    this.reset = reset;
    console.log(this.reset)
  }

  getContent(content : any) {
    console.log("i app", content)
    this.content = content;
  }

  getCollectedDoc(collectedDoc : any) {
    console.log(collectedDoc)
    this.docToEdit = collectedDoc;
    if (this.type == "doc") {
      this.docToEdit.data.comments.reverse();
    }
  }

  getId(id : any) {
    this.documentId = id;
    console.log("i app", this.documentId)
  }

  getAuth(auth: any) {
    this.token = auth.token;
    this.user = auth;
    this.auth = true;
  }

  getComment(comment: any) {
    this.comment = comment;
  }

  getType(type: any) {
    this.type = type;
  }
}
