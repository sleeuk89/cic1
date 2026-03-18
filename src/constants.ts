export interface Location {
  name: string;
  slug: string;
  county: string;
  postcode?: string;
}

export const UK_LOCATIONS: Location[] = [
  { name: "London", slug: "london", county: "Greater London" },
  { name: "Manchester", slug: "manchester", county: "Greater Manchester" },
  { name: "Birmingham", slug: "birmingham", county: "West Midlands" },
  { name: "Leeds", slug: "leeds", county: "West Yorkshire" },
  { name: "Glasgow", slug: "glasgow", county: "Glasgow City" },
  { name: "Liverpool", slug: "liverpool", county: "Merseyside" },
  { name: "Newcastle", slug: "newcastle", county: "Tyne and Wear" },
  { name: "Sheffield", slug: "sheffield", county: "South Yorkshire" },
  { name: "Bristol", slug: "bristol", county: "Bristol" },
  { name: "Edinburgh", slug: "edinburgh", county: "City of Edinburgh" },
  { name: "Cardiff", slug: "cardiff", county: "South Glamorgan" },
  { name: "Belfast", slug: "belfast", county: "Antrim" },
  { name: "Leicester", slug: "leicester", county: "Leicestershire" },
  { name: "Coventry", slug: "coventry", county: "West Midlands" },
  { name: "Nottingham", slug: "nottingham", county: "Nottinghamshire" },
];

export const FAQ_DATA = [
  {
    question: "Who Can Make A Child Injury Compensation Claim?",
    answer: "A parent or legal guardian can act as a 'litigation friend' to make a claim on behalf of a child under 18. If no claim is made before they turn 18, the individual has until their 21st birthday to start a claim themselves."
  },
  {
    question: "How Much Compensation Can I Claim For My Child?",
    answer: "Compensation amounts vary depending on the severity of the injury and the impact on the child's future. Typical awards range from a few thousand pounds for minor injuries to significant sums for life-changing conditions. We provide a free assessment to estimate your potential claim value."
  },
  {
    question: "What Are The Most Common Causes Of Child Injuries?",
    answer: "Common causes include road traffic accidents, accidents at school or nursery, medical negligence, faulty products, and slips or trips in public places."
  },
  {
    question: "How Do I Start A Child Injury Claim?",
    answer: "The process starts with a free, no-obligation consultation. We will assess the details of the accident, gather evidence, and advise you on the best course of action. Most claims are handled on a 'No Win, No Fee' basis."
  },
  {
    question: "How Long Do I Have To Make A Claim?",
    answer: "For children, the standard three-year time limit does not start until they turn 18. This means a claim can be made at any point until their 21st birthday. However, starting early is always recommended to ensure evidence is fresh."
  }
];
