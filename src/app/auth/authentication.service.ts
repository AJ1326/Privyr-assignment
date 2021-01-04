import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { LeadService } from '../@shared/leads/leadservice';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private leadService: LeadService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call and guid and authentication observable should be used to get the user credentials.
    let userData = this.checkUserRole(context);
    if (userData.isUserExist) {
      this.credentialsService.setCredentials(userData, context.remember);
      return of(userData);
    } else {
      return of(userData);
    }
  }

  checkUserRole(value: any): any {
    if (value.username === 'AgentA' && value.password === 'admin1234') {
      return {
        id: this.leadService.generateId(),
        name: 'Shivam(Agent A)',
        agent_type: value.username,
        isUserExist: true,
        token: 123456,
      };
    } else if (value.username === 'AgentB' && value.password === 'admin1234') {
      return {
        id: this.leadService.generateId(),
        name: 'Abhishek(Agent B)',
        agent_type: value.username,
        isUserExist: true,
        token: 123456,
      };
    } else {
      return {
        isUserExist: false,
      };
    }
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
