const container = document.querySelector('.container');
let taskbox = document.querySelector(".taskbox")
const updateBackgroundColor = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        container.style.background = "#1E1E1E";
    } else {
        container.style.background = '#c3d7d6';
    }
};
updateBackgroundColor();
window.matchMedia('(prefers-color-scheme: dark)').addListener(updateBackgroundColor);

let enlist = document.getElementsByTagName('button')[0]

enlist.addEventListener("click", () => {
    const data = document.getElementsByTagName('input')[0];
    const datatext = data.value.trim();
    if (datatext !== '') {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var task = document.createElement('div')
        task.className = 'task'
        var assignment = document.createElement('div')
        assignment.className = 'assignment'
        assignment.textContent = datatext
        var delete_btn = document.createElement('button')
        delete_btn.className = 'delete'
        delete_btn.type = 'button'
        delete_btn.textContent = 'Delete'
        delete_btn.addEventListener("click", () => {
            taskbox.removeChild(task)
        })
        if (prefersDarkMode) {
            task.style.color = 'white'
        } else {
            task.style.color = 'black'
        }
        task.appendChild(assignment)
        task.appendChild(delete_btn)
        taskbox.appendChild(task)
        data.value = ''
        console.log('Done! Executed');
    } else {
        alert('Invalid data!. Blank input is not allowed?')
    }
})