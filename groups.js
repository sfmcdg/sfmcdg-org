const groups = [
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Salesforce Marketer Group (Marketing Cloud), Brisbane, Australia',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-brisbane-australia/'
  },
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Salesforce Marketing Cloud Developers Group (Virtual)',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketing-cloud-developers-group-virtual/'
  },
  {
    location: 'Asia Pacific',
    country: 'Australia',
    name: 'Salesforce Marketer Group (Marketing Cloud), Sydney, Australia',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-sydney-australia/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Bengaluru, India',
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
    name: 'Salesforce Marketer Group (Marketing Cloud), Hyderabad, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-hyderabad-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Lucknow, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-lucknow-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Mumbai, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-mumbai-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), Pune, India',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-pune-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'India',
    name: 'Salesforce Marketer Group (Marketing Cloud), sikar, india',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-sikar-india/'
  },
  {
    location: 'Asia Pacific',
    country: 'Malaysia',
    name: 'Salesforce Marketer Group (Marketing Cloud), Cyberjaya, Malaysia',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-cyberjaya-malaysia/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Belgium',
    name: 'Salesforce Marketer Group (Marketing Cloud), Brussels, Belgium',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-brussels-belgium/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Croatia',
    name: 'Salesforce Marketer Group (Marketing Cloud), Zagreb, Croatia',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-zagreb-croatia/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'France',
    name: 'Salesforce Marketer Group (Marketing Cloud), Paris, France',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-paris-france/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Germany',
    name: 'Salesforce Marketer Group (Marketing Cloud), Berlin, Germany',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-berlin-germany/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Germany',
    name: 'Salesforce Marketer Group (Marketing Cloud), Hamburg, Germany',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-hamburg-germany/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Germany',
    name: 'Salesforce Marketer Group (Marketing Cloud), Munich, Germany',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-munich-germany/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Ireland',
    name: 'Salesforce Marketer Group (Marketing Cloud), Dublin, Ireland',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-dublin-ireland/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Italy',
    name: 'Salesforce Marketer Group (Marketing Cloud), Milano, Italy',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-milano-italy/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Netherlands',
    name: 'Salesforce Marketer Group (Marketing Cloud), Rotterdam, Netherlands',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-rotterdam-netherlands/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Netherlands',
    name: 'Salesforce Marketer Group (Marketing Cloud), Zeist, Netherlands',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-zeist-netherlands/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Norway',
    name: 'Salesforce Marketer Group (Marketing Cloud), Oslo, Norway',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-oslo-norway/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Poland',
    name: 'Salesforce Marketer Group (Marketing Cloud), Warsaw, Poland',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-warsaw-poland/'
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
    country: 'Sweden',
    name: 'Salesforce Marketer Group (Marketing Cloud), Stockholm, Sweden',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-stockholm-sweden/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'Switzerland',
    name: 'Salesforce Marketer Group (Marketing Cloud), Zurich, Switzerland',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-zurich-switzerland/'
  },
  {
    location: 'Europe, Middle East, Africa',
    country: 'United Kingdom',
    name: 'Salesforce Marketer Group (Marketing Cloud), London, United Kingdom',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-london-united-kingdom/'
  },
  {
    location: 'North America',
    country: 'Canada',
    name: 'Salesforce Marketer Group (Marketing Cloud), Toronto, Canada',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-toronto-canada/'
  },
  {
    location: 'North America',
    country: 'Mexico',
    name: 'Salesforce Marketer Group (Marketing Cloud), Torreon, Mexico',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-torreon-mexico/'
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
    name: 'Salesforce Marketer Group (Marketing Cloud), Bridgewater, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-bridgewater-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Cleveland, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-cleveland-united-states/'
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
    name: 'Salesforce Marketer Group (Marketing Cloud), Indianapolis, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-indianapolis-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Kansas City, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-kansas-city-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), San Francisco, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-san-francisco-united-states/'
  },
  {
    location: 'North America',
    country: 'United States',
    name: 'Salesforce Marketer Group (Marketing Cloud), Thousand Oaks, United States',
    url: 'https://trailblazercommunitygroups.com/salesforce-marketer-group-marketing-cloud-thousand-oaks-united-states/'
  }
]

export default groups
