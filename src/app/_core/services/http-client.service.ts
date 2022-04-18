import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface HttpOptions {
  params?: {
    [param: string]: string | number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, options?: HttpOptions): Observable<T> {

    const request = this.formatRequest(url, options);

    return this.httpClient.get<T>(request.url, request.options);

  }

  private formatRequest = (url: string, options: any = {}): { url: string, options: HttpOptions } => {

    const endpoint = url.includes(environment.apiEndpoint) ? url : `${environment.apiEndpoint}${url}`;

    return {
      url: endpoint,
      options: {
        ...options,
        params: {
          ...options.params,
          ['apikey']: environment.apikey,
        }
      }
    };
  }
}
