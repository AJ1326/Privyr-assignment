import { Agent } from './agent-interface';

export interface LeadList {
  id?: string;
  action_taken_by?: Agent;
  name?: string;
  comment?: string;
  email?: string;
  phone_number?: number;
  created_at?: string;
  status?: string;
  action_taken_at_time?: string;
}
