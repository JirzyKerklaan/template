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
    description: '';
  };
  attributes: {
    Title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
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
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'cube';
    description: '';
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
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Review: Attribute.Component<'reviews.single-review', true>;
  };
}

export interface ReviewsSingleReview extends Schema.Component {
  collectionName: 'components_reviews_single_reviews';
  info: {
    displayName: 'Single-review';
    icon: 'cube';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    function: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Service: Attribute.Component<'services.single-service', true>;
  };
}

export interface ServicesSingleService extends Schema.Component {
  collectionName: 'components_services_single_services';
  info: {
    displayName: 'single-service';
    icon: 'cube';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
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
      'reviews.single-review': ReviewsSingleReview;
      'services.services': ServicesServices;
      'services.single-service': ServicesSingleService;
    }
  }
}
