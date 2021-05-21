export const profilePicture = process.env.PUBLIC_URL + "/me.jpg";
export const myName = 'Zaharia Justinian-Darius';
export const myOccupation = '~Student~';

const red = process.env.PUBLIC_URL + "/red_crayon.jpg";
export const BGStyle = {
    backgroundImage:`url(${red})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'800px',
    backgroundPosition:'50% 50%'
};

export const info = [
    {key:'Gender:',val:'Male'},
    {key:'Date of birth:',val:'15/07/1999'},
    {key:'Nationality:',val:'Romanian'},
    {key:'Address:',val:'country Romania, city Timisoara, street "Surorile Martir Caceu", nr. 55'},
    {key:'Email:',val:'justinian.zaharia@gmail.com'},
    {key:'Telephone number:',val:'(+40) 727954641'}
];

export const skills = ["Microsoft Office","C","C++","Java","Design Patterns","OOP","MySql","JSP","Git",
"Linux Shell","HTML","CSS","JavaScript"];

export const education = [
    {
        startDate:'15/09/2014',
        endDate:'25/05/2018',
        address:'Bulevardul Constantin Diaconovici Loga 45, Timisoara, Timis, Romania',
        degree:'BAC Degree',
        institution:'National College "Carmen Sylva"',
        website:'https://colegiulcarmensylvatimisoara.ro/'
    },
    {
        startDate:'24/09/2018',
        endDate:'CURRENT',
        address:'Bulevardul Vasile Parvan 2, Timisoara, Timis, Romania',
        degree:'Bachelor Degree in Computer Science',
        institution:'Politehnica University of Timisoara',
        website:'http://www.ac.upt.ro/'
    }
];