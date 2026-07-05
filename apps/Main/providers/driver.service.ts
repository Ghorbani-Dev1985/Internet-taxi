import { HttpStatus, Injectable } from '@nestjs/common';


@Injectable()
export class DriversService {
  async signUp(){
    return 'Welcome from main'
  }
}