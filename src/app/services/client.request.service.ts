import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const config = 'assets/config.json';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }
    headers: any; // Placed to include header information
    getRequest(): any {
        return this.http.get(config, { observe: 'response', responseType: 'json' });
    }
    getResponse(configURL: string): any {
        return this.http.get(configURL, { observe: 'body', responseType: 'json' });;
    }
}
