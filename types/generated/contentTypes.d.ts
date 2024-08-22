import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
    name: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    mobile: Attribute.String;
    firstname: Attribute.String;
    lastname: Attribute.String;
    gender: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    user_device: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::user-device.user-device'
    >;
    company: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::company.company'
    >;
    isSuperAdmin: Attribute.Boolean;
    crmrole: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::crmrole.crmrole'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityActivity extends Schema.CollectionType {
  collectionName: 'activities';
  info: {
    singularName: 'activity';
    pluralName: 'activities';
    displayName: 'Activity';
    name: 'activity';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    activityName: Attribute.String;
    company: Attribute.Relation<
      'api::activity.activity',
      'oneToOne',
      'api::company.company'
    >;
    activityTime: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity.activity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity.activity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAllmoduleAllmodule extends Schema.CollectionType {
  collectionName: 'allmodules';
  info: {
    singularName: 'allmodule';
    pluralName: 'allmodules';
    displayName: 'Allmodule';
    name: 'allmodule';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::allmodule.allmodule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::allmodule.allmodule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'Brand';
    name: 'brand';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    brandName: Attribute.String;
    company: Attribute.Relation<
      'api::brand.brand',
      'manyToOne',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCampaignCampaign extends Schema.CollectionType {
  collectionName: 'campaigns';
  info: {
    singularName: 'campaign';
    pluralName: 'campaigns';
    displayName: 'Campaign';
    name: 'campaign';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    campaignName: Attribute.String;
    campaignStatus: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'api::campaign-status.campaign-status'
    >;
    company: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'api::company.company'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCampaignEmailCampaignEmail extends Schema.CollectionType {
  collectionName: 'campaign_emails';
  info: {
    singularName: 'campaign-email';
    pluralName: 'campaign-emails';
    displayName: 'Campaign-email';
    name: 'campaign-email';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    campaignEmailName: Attribute.String;
    campaignEmailTopic: Attribute.String;
    campaignEmailSubject: Attribute.Text;
    campaignEmailSender: Attribute.String;
    campaignEmailContent: Attribute.RichText;
    campaign: Attribute.Relation<
      'api::campaign-email.campaign-email',
      'oneToOne',
      'api::campaign.campaign'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::campaign-email.campaign-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::campaign-email.campaign-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCampaignStatusCampaignStatus extends Schema.CollectionType {
  collectionName: 'campaign_statuses';
  info: {
    singularName: 'campaign-status';
    pluralName: 'campaign-statuses';
    displayName: 'Campaign-status';
    name: 'campaign-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    campaignStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::campaign-status.campaign-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::campaign-status.campaign-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCdrCdr extends Schema.CollectionType {
  collectionName: 'cdrs';
  info: {
    singularName: 'cdr';
    pluralName: 'cdrs';
    displayName: 'Cdr';
    name: 'cdr';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    uuid: Attribute.String & Attribute.Unique;
    description: Attribute.String;
    status: Attribute.String;
    service: Attribute.String;
    date: Attribute.String;
    time: Attribute.String;
    call_duration: Attribute.String;
    department_name: Attribute.String;
    agent_number: Attribute.String;
    agent_name: Attribute.String;
    client_number: Attribute.String;
    recording_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cdr.cdr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cdr.cdr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Schema.CollectionType {
  collectionName: 'companies';
  info: {
    singularName: 'company';
    pluralName: 'companies';
    displayName: 'Company';
    name: 'company';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    companyName: Attribute.String;
    companyGSTNumber: Attribute.String;
    companyPANNumber: Attribute.String;
    companyTANNumber: Attribute.String;
    companyWebsocCRMUniqueID: Attribute.BigInteger;
    companyIndustry: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'api::industry.industry'
    >;
    users: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    brands: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'api::brand.brand'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
    name: 'contact';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    contactName: Attribute.String;
    company: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'api::company.company'
    >;
    contactEmail: Attribute.String;
    contactMobile: Attribute.String;
    contactTitle: Attribute.String;
    contactFirstName: Attribute.String;
    contactLastName: Attribute.String;
    contactJobTitle: Attribute.String;
    contactCompanyName: Attribute.String;
    contactCity: Attribute.String;
    contactAddress: Attribute.Text;
    contactState: Attribute.String;
    contactPincode: Attribute.String;
    contactCountry: Attribute.String;
    contactWebsiteAddress: Attribute.String;
    contactSecondaryEmail: Attribute.String;
    contactNotes: Attribute.String;
    contactTwitterHandle: Attribute.String;
    contactFacebookHandle: Attribute.String;
    contactInstagramHandle: Attribute.String;
    contactLinkedinHandle: Attribute.String;
    contactSource: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'api::source.source'
    >;
    campaignSource: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'api::campaign.campaign'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrmroleCrmrole extends Schema.CollectionType {
  collectionName: 'crmroles';
  info: {
    singularName: 'crmrole';
    pluralName: 'crmroles';
    displayName: 'Crmrole';
    name: 'crmrole';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    company: Attribute.Relation<
      'api::crmrole.crmrole',
      'oneToOne',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crmrole.crmrole',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crmrole.crmrole',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomerCustomer extends Schema.CollectionType {
  collectionName: 'customers';
  info: {
    singularName: 'customer';
    pluralName: 'customers';
    displayName: 'Customer';
    name: 'customer';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    customerName: Attribute.String;
    customerPhoneNumber: Attribute.String;
    customerEmail: Attribute.String;
    customerIndustry: Attribute.String;
    customerGender: Attribute.String;
    customerAge: Attribute.BigInteger;
    customerAddress: Attribute.Text;
    company: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'api::company.company'
    >;
    campaignSource: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'api::campaign.campaign'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::customer.customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDealDeal extends Schema.CollectionType {
  collectionName: 'deals';
  info: {
    singularName: 'deal';
    pluralName: 'deals';
    displayName: 'Deal';
    name: 'deal';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    dealName: Attribute.String;
    dealType: Attribute.Enumeration<['ExistingBusiness', 'NewBusiness']>;
    dealContactPersonName: Attribute.String;
    dealContactPersonPhoneNumber: Attribute.String;
    dealContactPersonEmail: Attribute.String;
    dealContactPersonAlternateEmail: Attribute.String;
    dealContactPersonAlternatePhoneNumber: Attribute.String;
    dealSource: Attribute.Relation<
      'api::deal.deal',
      'oneToOne',
      'api::source.source'
    >;
    campaignSource: Attribute.Relation<
      'api::deal.deal',
      'oneToOne',
      'api::campaign.campaign'
    >;
    dealOwner: Attribute.Relation<
      'api::deal.deal',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    company: Attribute.Relation<
      'api::deal.deal',
      'oneToOne',
      'api::company.company'
    >;
    dealStatus: Attribute.Relation<
      'api::deal.deal',
      'oneToOne',
      'api::deal-status.deal-status'
    >;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::deal.deal', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDealStatusDealStatus extends Schema.CollectionType {
  collectionName: 'deal_statuses';
  info: {
    singularName: 'deal-status';
    pluralName: 'deal-statuses';
    displayName: 'Deal-status';
    name: 'deal-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    dealStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::deal-status.deal-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::deal-status.deal-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDepartmentDepartment extends Schema.CollectionType {
  collectionName: 'departments';
  info: {
    singularName: 'department';
    pluralName: 'departments';
    displayName: 'Department';
    name: 'department';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    departmentName: Attribute.String;
    company: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmailEmail extends Schema.CollectionType {
  collectionName: 'emails';
  info: {
    singularName: 'email';
    pluralName: 'emails';
    displayName: 'Email';
    name: 'email';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    from: Attribute.String;
    to: Attribute.String;
    subject: Attribute.String;
    message: Attribute.Text;
    attachments: Attribute.Media<'images' | 'files' | 'videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::email.email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::email.email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Schema.CollectionType {
  collectionName: 'industries';
  info: {
    singularName: 'industry';
    pluralName: 'industries';
    displayName: 'Industry';
    name: 'industry';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    industryName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadLead extends Schema.CollectionType {
  collectionName: 'leads';
  info: {
    singularName: 'lead';
    pluralName: 'leads';
    displayName: 'Lead';
    name: 'lead';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    leadFirstName: Attribute.String;
    leadPhonenumber: Attribute.String;
    leadMobileNumber: Attribute.String;
    leadIndustry: Attribute.String;
    leadAnnualRevenueContribution: Attribute.String;
    leadEmailOptOut: Attribute.String;
    leadCompanyName: Attribute.String;
    leadLastName: Attribute.String;
    leadEmail: Attribute.String;
    leadWebsite: Attribute.String;
    leadSource: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'api::source.source'
    >;
    campaignSource: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'api::campaign.campaign'
    >;
    company: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'api::company.company'
    >;
    leadStatus: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'api::lead-status.lead-status'
    >;
    leadOwner: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    leadId: Attribute.String;
    leadGender: Attribute.String;
    leadSpecialityName: Attribute.String;
    leadAddress: Attribute.String;
    leadAppointmentDate: Attribute.String;
    leadStatusId: Attribute.String;
    leadStatusName: Attribute.String;
    utmSource: Attribute.String;
    utmMedium: Attribute.String;
    utmCampaign: Attribute.String;
    utmAdgroup: Attribute.String;
    utmTerm: Attribute.String;
    leadBusinessUnit: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    leadTestName: Attribute.String;
    leadDigitalMediaSource: Attribute.String;
    revenue: Attribute.String;
    orderId: Attribute.String;
    billNumber: Attribute.String;
    leadLocation: Attribute.String;
    time: Attribute.String;
    customerStatus: Attribute.String;
    date: Attribute.String;
    leadAge: Attribute.Integer;
    leadRemarks: Attribute.Text;
    leadCallType: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::lead.lead', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::lead.lead', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiLeadStatusLeadStatus extends Schema.CollectionType {
  collectionName: 'lead_statuses';
  info: {
    singularName: 'lead-status';
    pluralName: 'lead-statuses';
    displayName: 'Lead-status';
    name: 'lead-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    leadStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lead-status.lead-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lead-status.lead-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPathLabTestBookingPathLabTestBooking
  extends Schema.CollectionType {
  collectionName: 'path_lab_test_bookings';
  info: {
    singularName: 'path-lab-test-booking';
    pluralName: 'path-lab-test-bookings';
    displayName: 'Path-lab-test-booking';
    name: 'path-lab-test-booking';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    pathlabTestBookingStatus: Attribute.Relation<
      'api::path-lab-test-booking.path-lab-test-booking',
      'oneToOne',
      'api::pathlab-test-booking-status.pathlab-test-booking-status'
    >;
    company: Attribute.Relation<
      'api::path-lab-test-booking.path-lab-test-booking',
      'oneToOne',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::path-lab-test-booking.path-lab-test-booking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::path-lab-test-booking.path-lab-test-booking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPathlabTestBookingStatusPathlabTestBookingStatus
  extends Schema.CollectionType {
  collectionName: 'pathlab_test_booking_statuses';
  info: {
    singularName: 'pathlab-test-booking-status';
    pluralName: 'pathlab-test-booking-statuses';
    displayName: 'Pathlab-test-booking-status';
    name: 'pathlab-test-booking-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    PathlabTestBookingStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pathlab-test-booking-status.pathlab-test-booking-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pathlab-test-booking-status.pathlab-test-booking-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRolepermissionRolepermission extends Schema.CollectionType {
  collectionName: 'rolepermissions';
  info: {
    singularName: 'rolepermission';
    pluralName: 'rolepermissions';
    displayName: 'Rolepermission';
    name: 'rolepermission';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    Create: Attribute.Boolean;
    Get: Attribute.Boolean;
    Update: Attribute.Boolean;
    Delete: Attribute.Boolean;
    allmodule: Attribute.Relation<
      'api::rolepermission.rolepermission',
      'oneToOne',
      'api::allmodule.allmodule'
    >;
    crmrole: Attribute.Relation<
      'api::rolepermission.rolepermission',
      'oneToOne',
      'api::crmrole.crmrole'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rolepermission.rolepermission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rolepermission.rolepermission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSourceSource extends Schema.CollectionType {
  collectionName: 'sources';
  info: {
    singularName: 'source';
    pluralName: 'sources';
    displayName: 'Source';
    name: 'source';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    SourceName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::source.source',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::source.source',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTargetTarget extends Schema.CollectionType {
  collectionName: 'targets';
  info: {
    singularName: 'target';
    pluralName: 'targets';
    displayName: 'Target';
    name: 'target';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    targetName: Attribute.String;
    assignedTo: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    targetDescription: Attribute.Text;
    targetStatus: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'api::target-status.target-status'
    >;
    company: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'api::company.company'
    >;
    targetDueDate: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::target.target',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTargetStatusTargetStatus extends Schema.CollectionType {
  collectionName: 'target_statuses';
  info: {
    singularName: 'target-status';
    pluralName: 'target-statuses';
    displayName: 'Target-status';
    name: 'target-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    targetStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::target-status.target-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::target-status.target-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTaskTask extends Schema.CollectionType {
  collectionName: 'tasks';
  info: {
    singularName: 'task';
    pluralName: 'tasks';
    displayName: 'Task';
    name: 'task';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    subject: Attribute.String;
    contact: Attribute.Relation<
      'api::task.task',
      'oneToOne',
      'api::contact.contact'
    >;
    taskDescription: Attribute.String;
    taskRepeat: Attribute.Boolean;
    taskRemainder: Attribute.Boolean;
    taskPriority: Attribute.Enumeration<['High', 'Medium', 'Low']>;
    taskStatus: Attribute.Relation<
      'api::task.task',
      'oneToOne',
      'api::task-status.task-status'
    >;
    company: Attribute.Relation<
      'api::task.task',
      'oneToOne',
      'api::company.company'
    >;
    taskDueDate: Attribute.String;
    taskOwner: Attribute.Relation<
      'api::task.task',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::task.task', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTaskStatusTaskStatus extends Schema.CollectionType {
  collectionName: 'task_statuses';
  info: {
    singularName: 'task-status';
    pluralName: 'task-statuses';
    displayName: 'Task-status';
    name: 'task-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    taskStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::task-status.task-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::task-status.task-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTemplateTemplate extends Schema.CollectionType {
  collectionName: 'templates';
  info: {
    singularName: 'template';
    pluralName: 'templates';
    displayName: 'Template';
    name: 'template';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    mainHeading: Attribute.String;
    fieldUser: Attribute.String;
    fieldPassword: Attribute.String;
    fontSize: Attribute.String;
    nameOfTemplate: Attribute.String;
    templateResponses: Attribute.Relation<
      'api::template.template',
      'oneToMany',
      'api::template-response.template-response'
    >;
    uniqueId: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::template.template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::template.template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTemplateResponseTemplateResponse
  extends Schema.CollectionType {
  collectionName: 'template_responses';
  info: {
    singularName: 'template-response';
    pluralName: 'template-responses';
    displayName: 'Template-response';
    name: 'template-response';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    template: Attribute.Relation<
      'api::template-response.template-response',
      'manyToOne',
      'api::template.template'
    >;
    responseField1: Attribute.String;
    responseField2: Attribute.String;
    responserName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::template-response.template-response',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::template-response.template-response',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketTicket extends Schema.CollectionType {
  collectionName: 'tickets';
  info: {
    singularName: 'ticket';
    pluralName: 'tickets';
    displayName: 'Ticket';
    name: 'ticket';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    ticketName: Attribute.String;
    ticketPriority: Attribute.Enumeration<['High', 'Medium', 'Low', 'Blocker']>;
    ticketAssignedTo: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    ticketStatus: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::ticket-status.ticket-status'
    >;
    customer: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::customer.customer'
    >;
    company: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'api::company.company'
    >;
    ticketStartDate: Attribute.String;
    ticketEndDate: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketStatusTicketStatus extends Schema.CollectionType {
  collectionName: 'ticket_statuses';
  info: {
    singularName: 'ticket-status';
    pluralName: 'ticket-statuses';
    displayName: 'Ticket-status';
    name: 'ticket-status';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    ticketStatusName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket-status.ticket-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ticket-status.ticket-status',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserDeviceUserDevice extends Schema.CollectionType {
  collectionName: 'user_devices';
  info: {
    singularName: 'user-device';
    pluralName: 'user-devices';
    displayName: 'User-device';
    name: 'user-device';
  };
  options: {
    increments: true;
    timestamps: true;
    draftAndPublish: true;
  };
  attributes: {
    deviceName: Attribute.String;
    users_id: Attribute.Relation<
      'api::user-device.user-device',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    fcmToken: Attribute.String;
    deviceID: Attribute.String;
    brand: Attribute.String;
    carrier: Attribute.String;
    versionCode: Attribute.String;
    buildNumber: Attribute.String;
    deviceOS: Attribute.String;
    osVersion: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-device.user-device',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-device.user-device',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::activity.activity': ApiActivityActivity;
      'api::allmodule.allmodule': ApiAllmoduleAllmodule;
      'api::brand.brand': ApiBrandBrand;
      'api::campaign.campaign': ApiCampaignCampaign;
      'api::campaign-email.campaign-email': ApiCampaignEmailCampaignEmail;
      'api::campaign-status.campaign-status': ApiCampaignStatusCampaignStatus;
      'api::cdr.cdr': ApiCdrCdr;
      'api::company.company': ApiCompanyCompany;
      'api::contact.contact': ApiContactContact;
      'api::crmrole.crmrole': ApiCrmroleCrmrole;
      'api::customer.customer': ApiCustomerCustomer;
      'api::deal.deal': ApiDealDeal;
      'api::deal-status.deal-status': ApiDealStatusDealStatus;
      'api::department.department': ApiDepartmentDepartment;
      'api::email.email': ApiEmailEmail;
      'api::industry.industry': ApiIndustryIndustry;
      'api::lead.lead': ApiLeadLead;
      'api::lead-status.lead-status': ApiLeadStatusLeadStatus;
      'api::path-lab-test-booking.path-lab-test-booking': ApiPathLabTestBookingPathLabTestBooking;
      'api::pathlab-test-booking-status.pathlab-test-booking-status': ApiPathlabTestBookingStatusPathlabTestBookingStatus;
      'api::rolepermission.rolepermission': ApiRolepermissionRolepermission;
      'api::source.source': ApiSourceSource;
      'api::target.target': ApiTargetTarget;
      'api::target-status.target-status': ApiTargetStatusTargetStatus;
      'api::task.task': ApiTaskTask;
      'api::task-status.task-status': ApiTaskStatusTaskStatus;
      'api::template.template': ApiTemplateTemplate;
      'api::template-response.template-response': ApiTemplateResponseTemplateResponse;
      'api::ticket.ticket': ApiTicketTicket;
      'api::ticket-status.ticket-status': ApiTicketStatusTicketStatus;
      'api::user-device.user-device': ApiUserDeviceUserDevice;
    }
  }
}
