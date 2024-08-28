// creo un array con i dati forniti 
const team = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]
// prendo dal dom l elemento che mi serve
const teamContainer = document.getElementById('team-container');

// creo l elemento ul
const teamList = document.createElement('ul');
// per ogni persona creo un 'li' e lo aggiungiamo al 'ul'
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const memberItem = document.createElement('li');
    memberItem.innerHTML = `Nome: ${member.name}, Ruolo: ${member.job}, Foto: ${member.foto}`;
    teamList.appendChild(memberItem);
}
// aggiungo l'elenco che ho creato al div contenitore 
teamContainer.appendChild(teamList);
