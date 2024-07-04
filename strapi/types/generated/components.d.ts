import type { Schema, Attribute } from '@strapi/strapi';

export interface ClientsClients extends Schema.Component {
  collectionName: 'components_clients_clients';
  info: {
    displayName: 'Clients';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.Text;
  };
}

export interface PageheaderPageheader extends Schema.Component {
  collectionName: 'components_pageheader_pageheaders';
  info: {
    displayName: 'Pageheader';
    icon: 'cube';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    Social: Attribute.Component<'pageheader.social', true>;
  };
}

export interface PageheaderSocial extends Schema.Component {
  collectionName: 'components_pageheader_socials';
  info: {
    displayName: 'Social';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    Platform: Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'twitter']
    >;
    Link: Attribute.String;
  };
}

export interface ProjectsCard extends Schema.Component {
  collectionName: 'components_projects_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {};
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Project: Attribute.Component<'projects.card', true>;
  };
}

export interface ReviewsReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'clients.clients': ClientsClients;
      'footer.footer': FooterFooter;
      'pageheader.pageheader': PageheaderPageheader;
      'pageheader.social': PageheaderSocial;
      'projects.card': ProjectsCard;
      'projects.projects': ProjectsProjects;
      'reviews.reviews': ReviewsReviews;
      'services.services': ServicesServices;
    }
  }
}
