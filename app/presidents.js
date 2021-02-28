const allPresidents = [
    {
        order: 1,
        name: "George Washington",
        photo: "images/george-washington.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#FFD6E8", //unaffiliated.
        party: "Unaffiliated",
        ageColor: "#BAE6FF", //fifties.
        age: 57,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#DDE1E6", //military.
        experience: "Cmdr., Continental Army",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "April 30, 1789 – March 3, 1797"
    },
    {
        order: 2,
        name: "John Adams",
        photo: "images/john-adams.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Massachusetts",
        partyColor: "#DDE1E6", //federalist.
        party: "Federalist",
        ageColor: "#82CFFF", //sixties.
        age: 61,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1797 – March 3, 1801"
    },
    {
        order: 3,
        name: "Thomas Jefferson",
        photo: "images/thomas-jefferson.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#BAE6FF", //democratic-republican.
        party: "Democratic Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 57,
        marriageColor: "#DDE1E6", //widower.
        marriage: "Widower",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1801 – March 3, 1809"
    },
    {
        order: 4,
        name: "James Madison",
        photo: "images/james-madison.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#BAE6FF", //democratic-republican.
        party: "Democratic Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 57,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#82CFFF", //cabinet.
        experience: "Secretary of State",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1809 - March 3, 1817"
    },
    {
        order: 5,
        name: "James Monroe",
        photo: "images/james-monroe.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#BAE6FF", //democratic-republican.
        party: "Democratic Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 58,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#82CFFF", //cabinet.
        experience: "Secretary of State",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1817 – March 3, 1825"
    },
    {
        order: 6,
        name: "John Quincy Adams",
        photo: "images/john-quincy-adams.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Massachusetts",
        partyColor: "#BAE6FF", //democratic-republican.
        party: "Democratic Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 57,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#82CFFF", //cabinet.
        experience: "Secretary of State",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1825 – March 3, 1829"
    },
    {
        order: 7,
        name: "Andrew Jackson",
        photo: "images/andrew-jackson.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Carolinas",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#82CFFF", //sixties.
        age: 61,
        marriageColor: "#DDE1E6", //widower.
        marriage: "Widower",
        experienceColor: "#E5F6FF", //congress.
        experience: "Senator, Tennessee",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1829 – March 3, 1833"
    },
    {
        order: 8,
        name: "Martin Van Buren",
        photo: "images/martin-vanburen.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New York",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 54,
        marriageColor: "#DDE1E6", //widower.
        marriage: "Widower",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1837 – March 3, 1841"
    },
    {
        order: 9,
        name: "William Henry Harrison",
        photo: "images/william-harrison.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#C1C7CD", //whig.
        party: "Whig",
        ageColor: "#82CFFF", //sixties.
        age: 68,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E8DAFF", //diplomatic.
        experience: "Minister, Colombia",
        termColor: "#DDE1E6", //under-one.
        term: "1 month",
        departureColor: "#A2A9B0", //died.
        departure: "Died, pneumonia",
        yearInaugurated: "March 4, 1841 – April 4, 1841"
    },
    {
        order: 10,
        name: "John Tyler",
        photo: "images/john-tyler.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#C1C7CD", //whig.
        party: "Whig",
        ageColor: "#BAE6FF", //fifties.
        age: 51,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#DDE1E6", //under-one.
        term: "3 years, 11 months", //47 months
        departureColor: "#DDE1E6", //not-nominated.
        departure: "Not Nominated",
        yearInaugurated: "April 6, 1841 – March 3, 1845"
    },
    {
        order: 11,
        name: "James K. Polk",
        photo: "images/james-polk.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "North Carolina",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 49,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Tennessee",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1845 – March 3, 1849"
    },
    {
        order: 12,
        name: "Zachary Taylor",
        photo: "images/zachary-taylor.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#C1C7CD", //whig.
        party: "Whig",
        ageColor: "#82CFFF", //sixties.
        age: 64,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#DDE1E6", //military.
        experience: "Major General, US Army",
        termColor: "#DDE1E6", //under-one.
        term: "1 year, 4 months", //16 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, cholera morbus",
        yearInaugurated: "March 5, 1849 – July 9, 1850"
    },
    {
        order: 13,
        name: "Millard Fillmore",
        photo: "images/millard-fillmore.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New York",
        partyColor: "#C1C7CD", //whig.
        party: "Whig",
        ageColor: "#BAE6FF", //fifties.
        age: 50,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#DDE1E6", //under-one.
        term: "2 years, 7 months", //31 months
        departureColor: "#DDE1E6", //not-nominated.
        departure: "Not Nominated",
        yearInaugurated: "July 10, 1850 – March 3, 1853"
    },
    {
        order: 14,
        name: "Franklin Pierce",
        photo: "images/franklin-pierce.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "New Hampshire",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 48,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#DDE1E6", //military.
        experience: "Brigadier General, US Army",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#DDE1E6", //not-nominated.
        departure: "Not Nominated",
        yearInaugurated: "March 4, 1853 – March 3, 1857"
    },
    {
        order: 15,
        name: "James Buchanan",
        photo: "images/james-buchanan.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "Pennsylvania",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#82CFFF", //sixties.
        age: 65,
        marriageColor: "#FFD6E8", //never-married.
        marriage: "Never Married",
        experienceColor: "#E8DAFF", //diplomatic.
        experience: "Minister, UK",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1857 – March 3, 1861"
    },
    {
        order: 16,
        name: "Abraham Lincoln",
        photo: "images/abraham-lincoln.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Kentucky",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 52,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Representative, Illinois",
        termColor: "#82CFFF", //one-to-two.
        term: "4 years, 1 month", //49 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, assassinated",
        yearInaugurated: "March 4, 1861 – April 15, 1865"
    },
    {
        order: 17,
        name: "Andrew Johnson",
        photo: "images/andrew-johnson.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "North Carolina",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 56,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#DDE1E6", //under-one.
        term: "3 years, 10 months", //46 months
        departureColor: "#DDE1E6", //not-nominated.
        departure: "Not Nominated",
        yearInaugurated: "April 15, 1865 – March 3, 1869"
    },
    {
        order: 18,
        name: "Ulysses S. Grant",
        photo: "images/ulysses-grant.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#E5F6FF", //forties.
        age: 46,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#DDE1E6", //military.
        experience: "Cmdr. General, US Army",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1869 – March 3, 1873"
    },
    {
        order: 19,
        name: "Rutherford B. Hayes",
        photo: "images/rutherford-hayes.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 54,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Ohio",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1877 – March 3, 1881"
    },
    {
        order: 20,
        name: "James A. Garfield",
        photo: "images/james-garfield.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#E5F6FF", //forties.
        age: 49,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Representative, Ohio",
        termColor: "#DDE1E6", //under-one.
        term: "6 months",
        departureColor: "#A2A9B0", //died.
        departure: "Died, assassinated",
        yearInaugurated: "March 4, 1881 – September 19, 1881"
    },
    {
        order: 21,
        name: "Chester A. Arthur",
        photo: "images/chester-arthur.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Vermont",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 51,
        marriageColor: "#DDE1E6", //widower.
        marriage: "Widower",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#DDE1E6", //under-one.
        term: "3 years, 5 months", //41 months
        departureColor: "#DDE1E6", //not-nominated.
        departure: "Not Nominated",
        yearInaugurated: "Sept. 20, 1881 – March 3, 1885"
    },
    {
        order: 22,
        name: "Grover Cleveland",
        photo: "images/grover-cleveland.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New Jersey",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 47,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, New York",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1885 – March 3, 1889"
    },
    {
        order: 23,
        name: "Benjamin Harrison",
        photo: "images/benjamin-harrison.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 55,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Senator, Indiana",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1889 – March 3, 1893"
    },
    {
        order: 24,
        name: "Grover Cleveland",
        photo: "images/grover-cleveland.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New Jersey",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 55,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "President",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1893 – March 3, 1897"
    },
    {
        order: 25,
        name: "William McKinley",
        photo: "images/william-mckinley.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 54,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Ohio",
        termColor: "#82CFFF", //one-to-two.
        term: "4 years, 6 months", //54 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, assassinated",
        yearInaugurated: "March 4, 1897 – September 14, 1901"
    },
    {
        order: 26,
        name: "Theodore Roosevelt",
        photo: "images/theodore-roosevelt.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New York",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#E5F6FF", //forties.
        age: 42,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#82CFFF", //one-to-two.
        term: "7 years, 5 months", //89 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "September 14, 1901 - March 3, 1909"
    },
    {
        order: 27,
        name: "William Howard Taft",
        photo: "images/william-taft.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 51,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#82CFFF", //cabinet.
        experience: "Secretary of War",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1909 – March 3, 1913"
    },
    {
        order: 28,
        name: "Woodrow Wilson",
        photo: "images/woodrow-wilson.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Virginia",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 56,
        marriageColor: "#DDE1E6", //widower.
        marriage: "Widower",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, New Jersey",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "March 4, 1913 – March 3, 1921"
    },
    {
        order: 29,
        name: "Warren G. Harding",
        photo: "images/warren-harding.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Ohio",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 55,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Senator, Ohio",
        termColor: "#DDE1E6", //under-one.
        term: "2 years, 4 months", //28 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, heart attack",
        yearInaugurated: "March 4, 1921 – August 2, 1923"
    },
    {
        order: 30,
        name: "Calvin Coolidge",
        photo: "images/calvin-coolidge.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Vermont",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 51,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#82CFFF", //one-to-two.
        term: "5 years, 7 months", //67 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "Aug. 3, 1923 – March 3, 1929"
    },
    {
        order: 31,
        name: "Herbert Hoover",
        photo: "images/herbert-hoover.png",
        birthplaceColor: "#E5F6FF", //plains.
        birthplace: "Iowa",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 54,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#82CFFF", //cabinet.
        experience: "Secretary of Commerce",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "March 4, 1929 – March 3, 1933"
    },
    {
        order: 32,
        name: "Franklin D. Roosevelt",
        photo: "images/franklin-roosevelt.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New York",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 51,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, New York",
        termColor: "#FFD6E8", //more-than-two.
        term: "12 years, 1 month", //145 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, cerebral hemorrhage",
        yearInaugurated: "March 4, 1933 – April 12, 1945"
    },
    {
        order: 33,
        name: "Harry S. Truman",
        photo: "images/harry-truman.png",
        birthplaceColor: "#E5F6FF", //plains.
        birthplace: "Missouri",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#82CFFF", //sixties.
        age: 60,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#82CFFF", //one-to-two.
        term: "7 years, 9 months", //93 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "April 12, 1945 – January 20, 1953"
    },
    {
        order: 34,
        name: "Dwight D. Eisenhower",
        photo: "images/dwight-eisenhower.png",
        birthplaceColor: "#82CFFF", //southwest.
        birthplace: "Texas",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#82CFFF", //sixties.
        age: 62,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#DDE1E6", //military.
        experience: "Supreme Allied Cmdr.",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#82CFFF", //term-limited.
        departure: "Term Limited (1st one)",
        yearInaugurated: "January 20, 1953 – January 20, 1961"
    },
    {
        order: 35,
        name: "John F. Kennedy",
        photo: "images/john-kennedy.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Massachusetts",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 43,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Senator, Massachusetts",
        termColor: "#DDE1E6", //under-one.
        term: "2 years, 10 months", //34 months
        departureColor: "#A2A9B0", //died.
        departure: "Died, assassinated",
        yearInaugurated: "January 20, 1961 – November 22, 1963"
    },
    {
        order: 36,
        name: "Lyndon B. Johnson",
        photo: "images/lyndon-johnson.png",
        birthplaceColor: "#82CFFF", //southwest.
        birthplace: "Texas",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 55,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#82CFFF", //one-to-two.
        term: "5 years, 1 month", //61 months
        departureColor: "#BAE6FF", //retired.
        departure: "Retired",
        yearInaugurated: "November 22, 1963 – January 20, 1969"
    },
    {
        order: 37,
        name: "Richard Nixon",
        photo: "images/richard-nixon.png",
        birthplaceColor: "#1192E8", //far-west.
        birthplace: "California",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 56,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#82CFFF", //one-to-two.
        term: "5 years, 6 months", //66 months
        departureColor: "#FFD6E8", //resigned.
        departure: "Resigned",
        yearInaugurated: "January 20, 1969 - August 9, 1974"
    },
    {
        order: 38,
        name: "Gerald Ford",
        photo: "images/gerald-ford.png",
        birthplaceColor: "#E5F6FF", //plains.
        birthplace: "Nebraska",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#82CFFF", //sixties.
        age: 61,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#DDE1E6", //under-one.
        term: "2 years, 5 months", //29 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "August 9, 1974 – January 20, 1977"
    },
    {
        order: 39,
        name: "Jimmy Carter",
        photo: "images/jimmy-carter.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Georgia",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#BAE6FF", //fifties.
        age: 52,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Georgia",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "January 20, 1977 – January 20, 1981"
    },
    {
        order: 40,
        name: "Ronald Reagan",
        photo: "images/ronald-reagan.png",
        birthplaceColor: "#A2A9B0", //great-lakes.
        birthplace: "Illinois",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#82CFFF", //sixties.
        age: 69,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, California",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#82CFFF", //term-limited.
        departure: "Term Limited",
        yearInaugurated: "January 20, 1981 – January 20, 1989"
    },
    {
        order: 41,
        name: "George H. W. Bush",
        photo: "images/george-hw-bush.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Massachusetts",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#82CFFF", //sixties.
        age: 64,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "January 20, 1989 – January 20, 1993"
    },
    {
        order: 42,
        name: "Bill Clinton",
        photo: "images/bill-clinton.png",
        birthplaceColor: "#BAE6FF", //southeast.
        birthplace: "Arkansas",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 46,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Arkansas",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#82CFFF", //term-limited.
        departure: "Term Limited",
        yearInaugurated: "January 20, 1993 – January 20, 2001"
    },
    {
        order: 43,
        name: "George W. Bush",
        photo: "images/george-w-bush.png",
        birthplaceColor: "#DDE1E6", //new-england.
        birthplace: "Connecticut",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#BAE6FF", //fifties.
        age: 54,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#BAE6FF", //governor.
        experience: "Governor, Texas",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#82CFFF", //term-limited.
        departure: "Term Limited",
        yearInaugurated: "January 20, 2001 – January 20, 2009"
    },
    {
        order: 44,
        name: "Barack Obama",
        photo: "images/barack-obama.png",
        birthplaceColor: "#1192E8", //far-west.
        birthplace: "Hawaii",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#E5F6FF", //forties.
        age: 47,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#E5F6FF", //congress.
        experience: "Senator, Illinois",
        termColor: "#33B1FF", //two.
        term: "8 years", //96 months
        departureColor: "#82CFFF", //term-limited.
        departure: "Term Limited",
        yearInaugurated: "January 20, 2009 – January 20, 2017"
    },
    {
        order: 45,
        name: "Donald Trump",
        photo: "images/donald-trump.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "New York",
        partyColor: "#A2A9B0", //republican.
        party: "Republican",
        ageColor: "#33B1FF", //seventies.
        age: 70,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#FFD6E8", //private-industry.
        experience: "Chair, Trump Org.",
        termColor: "#BAE6FF", //one.
        term: "4 years", //48 months
        departureColor: "#C1C7CD", //lost-election.
        departure: "Lost election",
        yearInaugurated: "January 20, 2017 – January 20, 2021"
    },
    {
        order: 46,
        name: "Joe Biden",
        photo: "images/joe-biden.png",
        birthplaceColor: "#C1C7CD ", //mideast.
        birthplace: "Pennsylvania",
        partyColor: "#82CFFF", //democratic.
        party: "Democratic",
        ageColor: "#33B1FF", //seventies.
        age: 78,
        marriageColor: "#BAE6FF", //married.
        marriage: "Married",
        experienceColor: "#33B1FF", //executive-office.
        experience: "Vice President",
        termColor: "#F2F4F8", //now-in-office.
        term: "now in office",
        departureGroup: "#F2F4F8", //now-in-office.
        departure: "now in office",
        yearInaugurated: "January 20, 2021 – present"
    }
];

export {allPresidents};