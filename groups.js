const groups = [
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Brisbane, AU B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/brisbane-au-b2c-marketers-group/'
  },
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Melbourne Marketing Cloud Developers Group',
    url: 'https://trailblazercommunitygroups.com/marketing-cloud-developers-group/'
  },
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Sydney B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/sydney-au-b2c-marketers-group/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Bengaluru, IN B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-bengaluru-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Ajmer, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-ajmer-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Hyderabad, IN B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/hyderabad-in-b2c-marketers-group/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Mumbai, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-mumbai-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'Malaysia',
    name: 'Cyberjaya, Malaysia Salesforce Marketer Group (Marketing Cloud)',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-cyberjaya-malaysia/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Belgium',
    name: 'Brussels, BE B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/brussels-be-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'France',
    name: 'Paris, France B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/paris-france-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Germany',
    name: 'Berlin, DE B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/berlin-de-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Germany',
    name: 'Munich, DE B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/munich-de-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Netherlands',
    name: 'Rotterdam, Netherlands B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/rotterdam-netherlands-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Netherlands',
    name: 'Salesforce Marketer Group (Marketing Cloud), Zeist, Netherlands',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-zeist-netherlands/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Portugal',
    name: 'Salesforce Marketer Group (Marketing Cloud), Lisbon, Portugal',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-lisbon-portugal/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Spain',
    name: 'Salesforce Marketer Group (Marketing Cloud), Barcelona, Spain',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-barcelona-spain/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Switzerland',
    name: 'Zurich, CH B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/zurich-ch-b2c-marketers-group/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'United Kingdom',
    name: 'London, UK B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/london-uk-b2c-marketers-group/'
  },
  {
    location: 'North America',
    country: 'Canada',
    name: 'Toronto, CA B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/toronto-ca-b2c-marketers-group/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Austin, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-austin-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Cleveland, OH B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/cleveland-oh-b2c-marketers-group/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Fort Lauderdale, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-fort-lauderdale-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Glassboro, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-glassboro-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Indianapolis, IN B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/indianapolis-in-b2c-marketers-group/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Kansas City, MO B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/kansas-city-marketing-cloud-user-group/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'San Francisco, CA B2C Marketers Group',
    url: 'https://trailblazercommunitygroups.com/san-francisco-ca-b2c-marketers-group/'
  }
]

export default groups
