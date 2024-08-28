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
// prendo dal dom l elementi che mi servono
const teamContainer = document.getElementById('team-container');

// creo la stringa da comporre
let memberItem = '';
// per ogni persona creo la card
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    memberItem += `
    <div class="col-4">
        <div class="card">
            <img src="img/${member.foto}" alt="${member.name}">
            <div class="name">${member.name}</div>
            <div class="job">${member.job}</div>
        </div>
    </div>
    `;
}
teamContainer.innerHTML = memberItem;
