const session = localStorage.getItem('session');
const data = session ? JSON.parse(session) :[];

for (const datum of data) {
    const block = document.createElement('div');
    block.innerText = datum.date;
    document.body.appendChild(block);
}