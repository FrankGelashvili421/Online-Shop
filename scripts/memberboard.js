document.addEventListener('DOMContentLoaded', ()=>{
    const member = document.querySelector('.members');
    const inputFilther = document.querySelector('.inputFilter');
    let usersList;

    const users = async ()=>{
        try{
            const get = await fetch('https://jsonplaceholder.typicode.com/users');
            if(get.ok){
                const memberlist = await get.json();
                usersList = memberlist;
                memberList(usersList);
            };
        } catch(error){
            console.log(error, 'Somethings Wrong')
        }
    }
   
    const memberList = (memberlist)=>{
        member.innerHTML = "";
        memberlist.forEach(element => {
            const memberListContainer = document.createElement('div')
            memberListContainer.className = 'memberListContainer';
            memberListContainer.innerHTML =`
                <ul class="memberList">
                    <li><a>name:</a> ${element.name}</li>
                    <li><a>username:</a>  ${element.username}</li>
                    <li><a>gmail:</a> ${element.email}</li>
                    <li><a>number:</a> ${element.phone}</li>
                    <li><a>City:</a> ${element.address.city}</li>
                    <li><a>Company:</a> ${element.company.name}</li>
                </ul>
            `;
            member.appendChild(memberListContainer);
        });
    };

    const filtheredUsers = () => {  
        let userfilther = usersList.filter(user => user.name.toLowerCase().includes(inputFilther.value.toLowerCase()));
        memberList(userfilther);

    };
    inputFilther.addEventListener('input' , filtheredUsers);
 users();

});

