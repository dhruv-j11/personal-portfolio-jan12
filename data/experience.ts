export interface ExperienceYear {
  year: number
  roles: {
    title: string
    company?: string
    description: string
    achievements?: string[]
  }[]
  projects?: string[]
  skills?: string[]
}

export const experience: ExperienceYear[] = [
  {
    year: 2025,
    roles: [
      {
        title: 'University of Waterloo',
        company: 'Clubs & Societies',
        description: 'Currently in 1B of Honours Mathematics',
        achievements: [
          'CS Club, Data Science Club, MathSoc',
          'Figma Builders Club, Quant Club, Tech+ UW,',
          'Courses: Calc 1 & 2, Linear Algebra, CS135, Economics 101 & 102, Commerce 101'
        ],
      },
    
      {
        title: 'Conference Chairman',
        company: 'SOAR Conference',
        description: 'Co-pres of the PDSBs biggest student-led conference for students in grades 7-8.',
        achievements: [
          'Scaled conference operations to upwards of 2x with 150+ delegates, 30+ executives, and $15000 in funding.',
          'Overlooked operations alongside co-chairs including sponsorships, website dev, meal plans, and more.',
        ],
      },

      {
        title: 'Vice-President',
        company: 'TurnerHacks Hackathon',
        description: 'Organized TurnerHacks alongside a team of students for over 120+ Hackers at Brampton City Hall.',
        achievements: [
          'Redesigned my own Design templates and UX/UI from previous years hackathon. Marketed to students across PDSB',
          'Led all social media operations, gaining over 38000 views on posted content.',
        ],
      },

      {
        title: 'Turner Fenton Secondary School',
        company: 'Clubs & Societies',
        description: 'More stuff I was a part of.',
        achievements: [
          'HOSA Chapter VP of Comms',
          'Math and Computing Club VP, FBLA Competitor',
          '+550 Verified Volunteer Hours.'
        ],
      },

      

    ],
    skills: ['Mathematics', 'Computer Science', 'Web Development' ,'Organizational Leadership', 'Operations Management', 'Marketing', 'Social Media Management', 'UX/UI'],
  },

  {
    year: 2024,
    roles: [

      {
        title: 'Web Developer',
        company: 'AlumniTalks',
        description: 'Created fullstack platform for my CAS Group Project.',
        achievements: [
          'Built Alumni-student networking platform using React, Firebase, and Node, connecting hundreds of students',
          'Hosted two live workshops and grew social media following to 400+.'
        ],
      },

      {
        title: 'Library Events Assistant',
        company: 'Brampton Library',
        description: 'Supervised and hosted events for kids ages 3-13 @ Susan Fennel branch.',
        
      },
    ],
    skills: ['React', 'Node.js', 'Application Development', 'HTML CSS', 'JavaScript', 'Event Management', 'Leadership'],
  }]