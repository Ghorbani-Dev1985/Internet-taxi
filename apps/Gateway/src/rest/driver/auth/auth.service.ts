import { Injectable } from '@nestjs/common';
import { DriverRequestOtpInputDto } from 'src/dtos/driver.dto';
import { MainServiceClient } from 'src/services/main.service';

@Injectable()
export class DriverAuthService {
  constructor(private readonly mainSerCli: MainServiceClient) {}
  async requestOtp(body: DriverRequestOtpInputDto) {
    const data = await this.mainSerCli.callAction({
      provider: 'DRIVERS',
      action: 'requestOtp',
      query: body,
    });
    return data
  }
}
