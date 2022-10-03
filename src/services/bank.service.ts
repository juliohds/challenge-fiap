import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import config from 'src/config/configuration';

@Injectable()
export class AccountService {
  constructor(private httpService: HttpService) {}

  getToken() {
    const headersRequest = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    try {
      return this.httpService
        .post(
          `${config().api.accountUrl}/login`,
          {
            email: config().api.user,
            password: config().api.password,
          },
          {
            headers: headersRequest,
          },
        );
    } catch (error) {
      return error;
    }
  } 
}
