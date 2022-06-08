/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { roles } from '../common/enums';

const Menu = (userRole) => {
  const menuItems = {
    items: [
      {
        heading: 'Message Center',
        expanded: false,
        link: '#/messages',
        target: '_self',
        child: [],
        roles: [],
      },
      {
        heading: 'Deviations',
        expanded: false,
        child: [
          {
            title: 'Active Deviations',
            link: '#/deviations/activedeviations',
            target: '_self',
            roles: [],
          },
          {
            title: 'Combined Deviation History',
            link: '#/deviations/combineddeviationhistory',
            target: '_self',
            roles: [],
          },
          {
            title: 'Monthly Weights',
            link: '#/deviations/monthlyweights',
            target: '_self',
            roles: [roles.Batch_Validator],
          },
          {
            title: 'Expected Deviation Override',
            link: '#/deviations/expecteddeviationoverride',
            target: '_self',
            roles: [roles.Batch_Validator, roles.INTERNAL_DATA_VIEWER, roles.State_Validator],
          },
          {
            title: 'Request Deviation Report',
            link: '#/deviations/reports/deviationreport',
            target: '_self',
            roles: [],
          },
          {
            title: 'DSR Level Data',
            link: '#/deviations/reports/dsrleveldata',
            target: '_self',
            roles: [],
          },
          {
            title: 'NAIC Premium data',
            link: '#/deviations/reports/naicpremium',
            target: '_self',
            roles: [],
          },
        ],
      },
      {
        heading: 'Call Data',
        expanded: false,
        child: [
          {
            title: 'Search Call Data',
            link: '#/calls/search',
            target: '_self',
            roles: [],
          },
          {
            title: 'Create Call Data',
            link: '#/calls/create',
            target: '_self',
            roles: [roles.Data_Supplier, roles.Hard_Copy_Data_Supplier],
          },
          {
            title: 'Copy Call Data',
            link: '#/calls/copy',
            target: '_self',
            roles: [roles.Data_Supplier],
          },
          {
            title: 'Import Call Data',
            link: '#/calls/import',
            target: '_self',
            roles: [roles.Data_Supplier],
          },
          {
            title: 'Export Call Data',
            link: '#/calls/export',
            target: '_self',
            roles: [roles.Batch_Validator, roles.Data_Supplier, roles.State_Validator],
          },
          {
            title: 'Validate Call Data',
            link: '#/calls/export',
            target: '_self',
            roles: [roles.Batch_Validator, roles.Data_Supplier, roles.Hard_Copy_Data_Supplier, roles.State_Validator],
          },
          {
            title: 'Submit Call Data',
            link: '#/calls/export',
            target: '_self',
            roles: [roles.Batch_Validator, roles.Data_Supplier, roles.Hard_Copy_Data_Supplier],
          },
        ],
      },
      {
        heading: 'Edits',
        expanded: false,
        child: [
          {
            title: 'Search Current Edits',
            link: '#/edits/searchedits',
            target: '_self',
            roles: [],
          },
          {
            title: 'Request Edit Report',
            link: '#/edits/editreport',
            target: '_self',
            roles: [],
          },
          {
            title: 'Create Custom Edit',
            link: '#/edits/customedit',
            target: '_self',
            roles: [roles.Batch_Validator, roles.State_Validator],
          },
        ],
      },
      {
        heading: 'Notifications',
        expanded: false,
        link: '#/edits/notifcations',
        target: '_blank',
        child: [],
        roles: [],
      },
      {
        heading: 'Tools',
        expanded: false,
        child: [
          {
            title: 'Data Transfer via the Internet',
            link: '/appgateway/appgateway.aspx?request=pcat&app=DTVI&callapp=FDC',
            target: '_blank',
            roles: [],
          },
          {
            title: 'Data Manager Dashboard',
            link: '/appgateway/appgateway.aspx?request=pcat&app=DMD&callapp=FDC',
            target: '_blank',
            roles: [],
          },
          {
            title: 'View Print/Report Request Queue',
            link: '#/tools/reportqueue',
            target: '_self',
            roles: [],
          },
          {
            title: 'ADQIP Appeals',
            link: '#/tools/adqipappeals',
            target: '_self',
            roles: [],
          },
        ],
      },
      {
        heading: 'Publications and Training',
        expanded: false,
        child: [
          {
            title: 'Financial Calls Edit Matrix',
            link: '/appgateway/appgateway.aspx?request=pcatfunc&app=MANUALSLIBRARY&func=launchdocid&docid=DataReportingGuidebookPart10AEditProcessOverview&call=FDC',
            target: '_blank',
            roles: [],
          },
          {
            title: 'Reporting Guidebook',
            link: '/appgateway/appgateway.aspx?request=pcatfunc&app=MANUALSLIBRARY&func=launchdocid&docid=DataPrefaceChangeTracking&call=FDC',
            target: '_blank',
            roles: [],
          },
          {
            title: 'Data Quality Guidebook',
            link: '/appgateway/appgateway.aspx?request=pcatfunc&app=MANUALSLIBRARY&func=launchdocid&docid=rCoverPageDataQualityGuidebook&call=FDC',
            target: '_blank',
            roles: [],
          },
          {
            title: 'Import Record Layouts',
            link: '/manuals/ReportingGuidebook/FDC_Import_Record_Layout.pdf',
            target: '_blank',
            roles: [],
          },
          {
            title: 'Import Record Templates',
            link: '/manuals/ReportingGuidebook/New_Electronic_Import_Template.xlsx',
            target: '_self',
            roles: [],
          },
          {
            title: 'Online Product Training',
            link: '/appgateway/appgateway.aspx?request=link&id=docid&value=67EAA13F-B555-4013-B77B-6108376B8F78&callapp=FDC',
            target: '_blank',
            roles: [],
          },
        ],
      },

      {
        heading: 'Administration',
        expanded: false,
        child: [
          {
            title: 'Carrier Activity Reporting',
            link: '#/administration/carrieractivity',
            target: '_self',
            roles: [],
          },
          {
            title: 'NAIC Data List',
            link: '#/administration/naicdata',
            target: '_self',
            roles: [],
          },
          {
            title: 'Carrier Relationships',
            link: '#/administration/carrierrelationships',
            target: '_self',
            roles: [],
          },
          {
            title: 'Search Staging',
            link: '#/administration/searchstaging',
            target: '_self',
            roles: [],
          },
          {
            title: 'Edit Flag Reasonability Check',
            link: '#/administration/editreasonability',
            target: '_self',
            roles: [],
          },
          {
            title: 'Reports',
            link: '#/administration/reports',
            target: '_self',
            roles: [],
          },
          {
            title: 'Data Issues',
            link: '#/administration/dataissues',
            target: '_self',
            roles: [],
          },
        ],
      },
      {
        heading: 'About',
        expanded: false,
        link: '/appgateway/appgateway.aspx?request=link&id=docid&value=5FE372F7-90C7-4C25-998E-C1B6F7076FF8&callapp=FDC',
        target: '_blank',
        child: [],
      },
      
    ],
  };

  let menuObject = {};
  if (userRole !== undefined) {
    const filteredMenuArray = menuItems.items
      .filter((element) => ((element.child.length === 0) ? true : element.child.some((child) => child.roles)))
      .map((element) => {
        const newElt = { ...element };
        newElt.child = newElt.child.filter((x) => ((x.roles.length > 0) ? x.roles.includes(userRole) : true));
        return newElt;
      });
    menuObject = { items: filteredMenuArray };
  }

  return menuObject;
};
export default Menu;
