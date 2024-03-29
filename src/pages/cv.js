import './cv.css';

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout/'

import Img from 'gatsby-image'
import { DateTime, Interval, Duration } from 'luxon'

import { Badge, Container, Row, Col } from 'reactstrap'

import { rhythm } from '../utils/typography'

import { parsePhoneNumberFromString as parseTn } from 'libphonenumber-js'

import color from '../utils/stringColor'

let data = {
  "basics": {
    "name": "Jamie Czerwinski",
    "label": "Software Engineer and Data Scientist",
    "picture": "",
    "email": "jamie.czerwinski@gmail.com",
    "phone": "+17809087687",
    "website": "http://www.jczerwinski.xyz",
    "summary": "",
    "location": {
      "city": "Edmonton",
      "region": "Alberta",
      "country": "Canada"
    }/*
    "profiles": [{
      "network": "Twitter",
      "username": "jczerwinski",
      "url": "http://twitter.com/jczerwinski"
    }]*/
  },
  "work": [{
    "institution": "TELUS",
    "startDate": "2010-05-05",
    "endDate": "present",
    "experiences": [
      {
        "institution": "TELUS",
        "area": "Consumer Products and Services",
        "position": "Performance Analyst",
        "website": "http://www.telus.com",
        "startDate": "2019-03-01",
        "endDate": "present",
        "summary": "Measures and drives the reliability of the TELUS Consumer Wi-Fi portfolio by generating actionable insights from data.",
        "highlights": [
          "Engineered fully automated analytics products from petabytes of raw transactional and operational data in support of the TELUS Consumer Wi-Fi program.",
          "Designed, developed, executed, and publicized customer Wi-Fi reliability experiments that helped guide millions of dollars in capital investment.",
          "Designed and developed visualizations and dashboards to enable program and product managers with self-serve analytic and monitoring capabilities.",
          "Enabled team capabilities by developing and sharing custom tooling and data products for the TELUS hadoop cluster."
        ],
        "skills": ['software engineering', 'data science', 'hadoop', 'hive', 'python', 'oozie', 'spark', 'scala', 'tableau', 'sas', 'bash', 'batch', 'powershell', 'agile', 'jira', 'google suite', 'excel', 'microsoft office', 'data analysis', 'remote/distributed teamwork', 'experiment design', 'research', 'requirements analysis', 'git', 'dashboard development', 'web analytics', 'telecommunications', 'unix', 'kpi development', 'reliability engineering']
      },{
        "institution": "TELUS",
        "area": "Broadband Networks Business Intelligence",
        "position": "Business Systems Analyst",
        "website": "http://www.telus.com",
        "startDate": "2017-07-01",
        "endDate": "2019-02-28",
        "summary": "Designed and developed applications, analytics, and team capabilities in support of the TELUS PureFibre build program.",
        "highlights": [
          "Led the end-to-end design, development, delivery, and 24/7 production support of a number of operational support systems focused on improving TELUS' fibre service drop inventory.",
          "Designed, developed, and maintained a number of automated data and analytics products, processes, and reports in support of the TELUS PureFibre build program.",
          "Led the migration of my team's application and data infrastructure from a staging environment to a production environment.",
          "Proactively designed, built consensus for, and implemented a streamlined BI team front-door website and process.",
          "Designed and developed an executive team scorecard and meeting agenda dashboard as a mobile-accessible web application.",
          "Led team adoption of agile project management and DevOps best practices."
        ],
        "skills": ['javascript', 'react', 'html', 'css', 'sass', 'less', 'orm', 'php', 'apache', 'sql', 'sql server', 'windows server', 'ssis', 'hadoop', 'hive', 'python', 'spark', 'bash', 'batch', 'powershell', 'project management', 'agile', 'jira', 'openshift', 'kubernetes', 'devops', 'ci', 'node.js', 'koa.js', 'git', 'tfs', 'tableau', 'domo', 'google analytics', 'google cloud api', 'google suite', 'data analysis', 'remote/distributed teamwork', 'requirements analysis', 'change management', 'web analytics', 'telecommunications', 'unix', 'bash', 'kpi development', 'geographic information systems (gis)']
      },{
        "institution": "TELUS",
        "area": "Customer Experience Help Desk",
        "position": "Developer Analyst",
        "website": "http://www.telus.com",
        "startDate": "2014-01-01",
        "endDate": "2017-06-30",
        "summary": "Designed, developed, and maintained application systems and reporting in support of the wireline Help Desk and Customer Experience teams.",
        "highlights": [
          "Evolved and maintained the Help Desk tracker web application, improving agent productivity and measurement capabilities.",
          "Designed and developed new team performance metrics, including 'search first' compliance and repeat call rates.",
          "Developed and delivered monthly and quarterly team performance and trend reporting.",
          'Designed, developed, and maintained the "Price Calculator" - a real-time product bundle quotation web application, significantly improving the ability of agents to quickly and accurately quote, close, and record bundle offers made to customers.'
        ],
        "skills": ['javascript', 'backbone.js', 'html', 'css', 'sass', 'microsoft iis', 'vb.net', 'microsoft access', 'sql', 'windows server', 'batch', 'apache', 'project management', 'agile', 'jira', 'node.js', 'git', 'piwik analytics', 'remote/distributed teamwork', 'web analytics', 'telecommunications', 'excel', 'microsoft office', 'client service', 'kpi development']
      },{
        "institution": "TELUS",
        "area": "Customer Experience Help Desk",
        "position": "Help Desk Analyst",
        "website": "http://www.telus.com",
        "startDate": "2010-10-01",
        "endDate": "2013-12-31",
        "summary": "Supported, mentored, coached, and trained TELUS consumer wireline customer care agents to provide a world-class customer experience.",
        "highlights": [
          "Consistent top performer as measured by quality (agent satisfaction surveys) and productivity (interaction volume)."
        ],
        "skills": ['remote/distributed teamwork', 'microsoft office', 'telecommunications', 'client service']
      },{
        "institution": "TELUS",
        "area": "Customer Experience",
        "position": "Customer Care Representative",
        "website": "http://www.telus.com",
        "startDate": "2010-05-01",
        "endDate": "2010-09-30",
        "summary": "Provided sales and service support to TELUS consumer wireline customers.",
        "highlights": [
          "Supported TELUS consumer wireline clients with a world-class customer experience.",
          "Consistent top performer as measured by sales, productivity, and quality."
        ],
        "skills": ['microsoft office', 'telecommunications', 'client service', 'sales']
      }
    ]
  }],
  "community": [
    {
      "institution": "Athabasca University Graduate Students' Association",
      "startDate": "2016-05-01",
      "endDate": "2019-04-30",
      "experiences": [
        {
          "institution": "Athabasca University Graduate Students' Association",
          "position": "Faculty Representative and Council Member",
          "website": "http://www.augsa.com",
          "startDate": "2018-05-01",
          "endDate": "2019-04-30",
          "summary": "Represented AU's Faculty of Science and Technology graduate students at AUGSA Council.",
          "highlights": [
            "Represented AUGSA to ab-GPAC as Treasurer.",
            "Provided continuity on Council from previous year's executive team."
          ],
          "skills": ['project management', 'google suite', 'remote/distributed teamwork', 'microsoft office', 'governance']
        },
        {
          "institution": "Athabasca University Graduate Students' Association (AUGSA)",
          "position": "President",
          "website": "http://www.augsa.com",
          "startDate": "2017-05-01",
          "endDate": "2018-04-30",
          "summary": "Led advocacy, engagement, and governance for Athabasca University's graduate students.",
          "highlights": [
            "Increased awareness of graduate student issues on the AU Board of Governors by proactively identifying and measuring graduate student priorities, and presenting the results in a grad student KPI dashboard.",
            "Enhanced student engagement by redesigning our email newsletter, resulting in a 400% increase in content penetration. Leveraged this improvement to drive increased student engagement in key priorities.",
            "Led AUGSA’s council and staff team through bylaw and policy development, strategic planning, budgeting, and a website redesign and migration.",
                    "Led graduate student advocacy efforts at Alberta Advanced Education consultations, with a focus on creative and practical approaches to a sustainable and responsive adult learning environment."
          ],
          "skills": ['communications', 'email campaigns', 'html', 'css', 'project management', 'google suite', 'remote/distributed teamwork', 'governance', 'advocacy', 'microsoft office', 'kpi development', 'strategic planning', 'budgeting', 'financial control']
        },
        {
          "institution": "Athabasca University Graduate Students' Association (AUGSA)",
          "position": "Vice-President External",
          "website": "http://www.augsa.com",
          "startDate": "2016-05-01",
          "endDate": "2017-04-30",
          "summary": "Advocated to the federal and provincial governments on behalf of graduate students.",
          "highlights": [
            "Led AUGSA's delegations to the Canadian Alliance of Students' Associations (CASA) and to the Alberta Graduate Provincial Advocacy Council (ab-GPAC).",
            "As Chair of CASA's Graduate Council, coordinated the development and review of a number of graduate-student focused federal advocacy policies and position papers."
          ],
          "skills": ['advocacy', 'project management', 'policy', 'governance', 'google suite', 'microsoft office']
        }
      ]
    },
    {
      "institution": "Alberta Graduate Provincial Advocacy Council",
      "startDate": "2016-05-01",
      "endDate": "2019-04-30",
      "experiences": [
        {
          "institution": "Alberta Graduate Provincial Advocacy Council (ab-GPAC)",
          "position": "Treasurer",
          "website": "http://www.abgpac.net",
          "startDate": "2018-05-01",
          "endDate": "2019-04-30",
          "summary": "Responsible for financial management of ab-GPAC.",
          "highlights": [
            "Recruited to return as Treasurer to provide organizational continuity.",
            "Led the budgeting, financial control, financial reporting, and financial policy development of the organization",
            "Transitioned the organization's financial systems to Quickbooks Online, improving the organization's transition process and remote collaboration capabilities."
          ],
          "skills": ['project management', 'policy', 'governance', 'google suite', 'budgeting', 'financial control', 'financial reporting', 'financial accounting', 'strategic planning', 'remote/distributed teamwork']
        },
        {
          "institution": "Alberta Graduate Provincial Advocacy Council (ab-GPAC)",
          "position": "Treasurer",
          "website": "http://www.abgpac.net",
          "startDate": "2016-05-01",
          "endDate": "2017-04-30",
          "summary": "Responsible for financial management of ab-GPAC and leading graduate student advocacy to the Government of Alberta.",
          "highlights": [
            "Led Alberta's graduate student advocacy to the Government of Alberta's reviews of tuition and post-secondary funding. Consulted with and surveyed students, led the development of our advocacy position, and organized and attended advocacy meetings with government and university officials. These efforts directly contributed to policy and legislation that closely aligned with our advocacy.",
            "Led the budgeting, financial control, financial reporting, and financial policy development of the organization",
            "Transitioned the organization and its directors to Google Suite, significantly simplifying our collaborative and administrative work.",
          ],
          "skills": ['advocacy', 'project management', 'policy', 'governance', 'google suite', 'budgeting', 'financial control', 'strategic planning']
        }
      ]
    },
  ],
  "education": [
    {
      "institution": "Athabasca University",
      "startDate": "2016-01-01",
      "endDate": "present",
      "experiences": [
        {
          "institution": "Athabasca University",
          "area": "Information Systems",
          "position": "Master of Science",
          "startDate": "2016-01-01",
          "endDate": "present",
          "summary": "Specialization in data science, user experience design, and geographic information systems (GIS).",
          "skills": ["java", "python", "javascript", "html", "css", "c", "matlab", "octave", "machine learning", "reinforcement learning", "mathematics", "calculus", "statistics", "probability models", "geographic information systems (gis)"]
        }
      ]
    },
    {
      "institution": "University of Alberta",
      "startDate": "2007-09-01",
      "endDate": "2011-08-31",
      "experiences": [
        {
          "institution": "University of Alberta",
          "area": "Computing and Mathematical Sciences",
          "position": "Bachelor of Science",
          "startDate": "2007-09-01",
          "endDate": "2011-08-31",
          "skills": ["java", "python", "javascript", "html", "css", "c", "matlab", "octave", "machine learning", "reinforcement learning", "mathematics", "calculus", "statistics", "probability models", "interaction design"]
        }
      ]
    }
  ]
};

class CV extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const tn = parseTn(data.basics.phone)    
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <section style={{textAlign: 'center'}}>
          <section className="cv">
            <address style={{marginBottom: '2.61em'}}>
              <span style={{fontSize: "1.6em"}}>{data.basics.name}</span><br />
              <span style={{fontSize: "1.2em"}}>{data.basics.label}</span><br /><br />
              <a href={data.basics.website}>{data.basics.website}</a><br />
              <a href={`mailto:${data.basics.email}`}>{data.basics.email}</a><br />
              <a href={tn.getURI()}>{tn.formatNational()}</a><br />
            </address>
            {/*<SkillsSummary data={data} />*/}
            <ExperienceType type="Education" experienceGroups={data.education} />
            <ExperienceType type="Work" experienceGroups={data.work} />
            <ExperienceType type="Community" experienceGroups={data.community} />
          </section>
        </section>
      </Layout>
    )
  }
}

function ExperienceType (props) {
  return <div style={{marginBottom: '2.62em'}}>
    <h3 style={{marginBottom: '1.62em'}}>{props.type}</h3>
    {props.experienceGroups.map(g => <ExperienceGroup group={g} />)}
  </div>;
}

function ExperienceGroup (props) {
  const {
    startDate,
    endDate,
    institution,
    experiences
  } = props.group;

  const hideDates = experiences.length <= 1;

  return <div>
    <section style={{textAlign: 'left', pageBreakInside: 'avoid'}}>
      <div>
        <DateRange start={startDate} end={endDate} bold />
        <div style={{display: 'inline-block', paddingLeft: '1em', borderLeft: '1px solid black', maxWidth: 505, paddingBottom: 10, fontWeight: 'bold'}}>
          {institution}
        </div>
      </div>
        {experiences.map(e => <Experience experience={e} hideDates={hideDates} />)}
    </section>
  </div>;
}

function DateRange (props) {
  const {start, end, bold, hideDates} = props;
  const style = {
    display: 'inline-block',
    width: 125,
    textAlign: 'right',
    verticalAlign: 'top',
    paddingRight: 12,
    fontWeight: bold ? 'bold': 'normal'
  };
  const startf = DateTime.fromISO(start).toFormat('yyyy');
  const endf = end === 'present' ? end : DateTime.fromISO(end).toFormat('yyyy');
  const rangef = `${startf} - ${endf}`;
  
  return <div style={style}>
    {!hideDates && rangef}
  </div>;
}

function Experience (props) {
  const {
    startDate,
    endDate,
    institution,
    area,
    position,
    summary,
    highlights,
    skills
  } = props.experience;
  const { hideDates } = props;
  return <div>
    <DateRange start={startDate} end={endDate} hideDates={hideDates} />
    <div style={{display: 'inline-block', paddingLeft: '1em', borderLeft: '1px solid black', maxWidth: 505, paddingBottom: 10}}>
      <details>
        <summary>{position}{area ? ` - ${area}` : ''}</summary>
        <div style={{marginLeft: 25, marginTop: 10, marginBottom: 15}}>
          <div style={{marginBottom: '.62em', fontStyle: 'italic'}}>{summary}</div>
          <Highlights highlights={highlights} />
          <Skills skills={skills} />
        </div>
      </details>
    </div>
  </div>;
}

function Highlights (props) {
  const highlights = props.highlights;
  if (highlights) {
    return <div>
      <h6>Highlights</h6>
      <ul>
        {highlights.map(h => <li style={{marginBottom: '0.61em'}}>{h}</li>)}
      </ul>
    </div>;
  } else {
    return null;
  }
}

function Skills (props) {
  return (<section>
    <h6>Experience With</h6>
    {props.skills.map(h => <Skill>{h}</Skill>)}
  </section>);
}

function Skill (props) {
  return <Badge color="light" style={{marginRight: '1em'}}>{props.children}</Badge>;
}

function SkillsSummary (props) {
  const {work, education, community} = props.data;
  return <section>
    <h3>Skills Summary</h3>
    {summarizeSkills([work, education, community]).map(s => {
      let {skill, duration} = s;
      duration = Duration.fromMillis(duration).as('years');
      return <Skill>{`${skill}: ${duration} years`}</Skill>;
    })}
  </section>;

  function summarizeSkills (types) {
    const skills = types.reduce((summary, type) => {
      return summary.concat(summarizeTypeSkills(type));
    }, []);
    let summary = skills.reduce((summary, {skill, duration}) => {
      summary[skill] = (summary[skill] || 0) + duration;
      return summary;
    }, {});
    return Object.entries(summary).map(s => ({skill: s[0], duration: s[1]}));
  }
  function summarizeTypeSkills (type) {
    return type.reduce((summary, group) => {
      return summary.concat(summarizeGroupSkills(group));
    }, []);
  }
  function summarizeGroupSkills (group) {
    return group.experiences.reduce((summary, experience) => {
      return summary.concat(summarizeExperienceSkills(experience));
    }, []);
  }
  function summarizeExperienceSkills (experience) {
    const duration = getDuration(experience);
    return experience.skills.map(skill => ({skill, duration}));
  }
  function getDuration (experience) {
    let {startDate, endDate} = experience;
    if (endDate = 'present') endDate = DateTime.local().toISODate();
    return Interval.fromDateTimes(DateTime.fromISO(startDate), DateTime.fromISO(endDate)).toDuration();
  }
}

export default CV

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
