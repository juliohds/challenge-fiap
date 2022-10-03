import { Injectable } from '@nestjs/common';
import { AccountService } from './services/accounts.service';

@Injectable()
export class AppService {

  constructor(
    private accountService: AccountService,
  ) {}


  async getToken() {
    
    const getToken = await this.accountService.getToken();
    return getToken;
  }
}
