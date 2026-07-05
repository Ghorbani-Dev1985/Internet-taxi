import { Injectable } from '@nestjs/common';
import { DriverSignUpInputDto } from 'src/dtos/driver.dto';
import { MainServiceClient } from 'src/services/main.service';

@Injectable()
export class DriverAuthService {
  constructor(private readonly mainSerCli: MainServiceClient) {}
  async signUp(body: DriverSignUpInputDto) {
    const data = await this.mainSerCli.callAction({
      provider: 'DRIVERS',
      action: 'signUp',
      query: body,
    });
    return data
  }
}
