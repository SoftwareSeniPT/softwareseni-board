export default (key) => {
  switch (key) {
    case 'backenddevelopers':
      return 'BE Dev';
    case 'clientsupportandadm':
      return 'Support';
    case 'customerservice':
      return 'CS';
    case 'frontenddevelopers':
      return 'FE Dev';
    case 'graphicdesigner':
      return 'GD';
    case 'hrandfinance':
      return 'HRD';
    case 'projectmanagersandtdm':
      return 'PM';
    case 'qualityassurance':
      return 'QA';
    case 'wordpressdevelopers':
      return 'WP Dev';
    default:
      return key;
  }
};
