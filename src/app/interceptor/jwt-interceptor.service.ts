import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();

    if (token) {
      if (this.authService.isAuthenticated()) {
        request = this.setHeader(request, token);
      }
    }
    return next.handle(request);
  }

  private setHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return request;
  }
}
