import { Injectable }                            from '@angular/core';
import { HttpClient, HttpHeaders }               from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class activityService {
  constructor(
    private http: HttpClient,
  ) { }

  get( ): Observable<any> {
    return this.http.get( 'http://93.188.164.87:8080/testFamsa' );
  }

  patch( activity ): Observable<any> {
    const headers = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '\'*\''
    } );

    return this.http.patch( 'http://93.188.164.87:8080/testFamsa', activity, { headers }  );
  }

  post( activity ): Observable<any> {
    const headers = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '\'*\''
    } );
    
    return this.http.post( 'http://93.188.164.87:8080/testFamsa', activity, { headers } );
  }

  delete( id ): Observable<any> {
    const headers = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '\'*\''
    } );
    
    return this.http.delete( 'http://93.188.164.87:8080/testFamsa?id='+id, { headers } );
  }
}
