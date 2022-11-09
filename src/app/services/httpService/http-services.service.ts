import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  baseUrl = environment.baseurl
  constructor(private httpclient: HttpClient) { }

  postService(url: string, reqdata: any, token: boolean = false, httpOption: any) {
    return this.httpclient.post(this.baseUrl + url, reqdata, token && httpOption)
  }
  getService() {

  }
  deleteService() {

  }
  putService() {

  }
  patchService() {

  }



}
