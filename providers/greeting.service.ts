// greeting.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  public getGreeting(): string {
    return 'Hello, Angular!';
  }
}