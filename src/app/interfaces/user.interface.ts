export interface User {
  avatar_url: string;
  created_at: string;
  email: string;
  id: number;
  influencer_marketing_wizard_state: string;
  influencer_profile_status: string;
  login: string;
  name: string;
  newsletter_subscription: boolean;
  // this could be an enum, i couldn't find it.
  role: string
  unique_code: string;
  user_info: object;
}
