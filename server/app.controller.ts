import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  apiTest (): any {
    return { status: 200 };
  }
}
