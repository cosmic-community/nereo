export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface HomePage extends CosmicObject {
  type: 'home-page';
  metadata: {
    site_name?: string;
    hero_description?: string;
    button_label?: string;
    button_url?: string;
    how_it_works_heading?: string;
    footer_link_label?: string;
    footer_link_url?: string;
  };
}

export interface HowItWorksStep extends CosmicObject {
  type: 'how-it-works-steps';
  metadata: {
    step_number?: number;
    description?: string;
    icon?: string;
  };
}