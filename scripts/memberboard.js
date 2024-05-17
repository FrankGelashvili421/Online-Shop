document.addEventListener('DOMContentLoaded', ()=>{

    const users = async ()=>{
        try{
            const get = await fetch('https://jsonplaceholder.typicode.com/users');

            if(get.ok){
                const memberlist = await get.json();

                const memberList = (memberlist)=>{
                    const member = document.querySelector('.members');

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
                }
                memberList(memberlist);
            };
        } catch(error){
            console.log(error)
        }
    }
    users()
})