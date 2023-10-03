const students = [
    {
        name: 'Ivan',
        phone: '3333333333'
    },
    {
        name: 'Ivan',
        phone: '2222222222'
    },
    {
        name: 'Kolya',
        phone: '3333333333'
    },
    {
        name: 'Ivan',
        phone: '4444444444'
    },
    {
        name: 'Ivan',
        phone: '5555555555'
    },

]

const action = +prompt('1. Add student' + '\n' + '2. Delete student.' + '\n' + 'Please enter "1" or "2"');
const studentName = prompt('Enter student name');
const studentPhone = prompt('Enter student phone');
const workName = toTitle(studentName.trim());

if (action === 2) {

    let foundName = false;

    for (let i = students.length - 1; i >= 0; i--) {
        if (students[i].name === workName || students[i].phone === studentPhone) {
            students.splice(i, 1);
            foundName = true;
        }
    }
    console.log('The final list:', students)
    if (foundName === false) {
        alert('This student is not on the list');
    }

}
else if (action === 1) {
    let flag = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].name === workName && students[i].phone === studentPhone) {
            alert('Student is already on the list');
            flag = true;
            break;
        }
    }
    if (flag === false) {
        let choice = confirm('Do you want to add a new user?');
        if (choice === true) {
            let newStudent = {
                name: workName,
                phone: studentPhone,
            }
            students.push(newStudent);
            console.log(`You have added the user ${workName} with a phone ${studentPhone}. Final list:`, students);
        } else {
            alert('You have not added a new user');
        }

    }

}
function toTitle(str) {
    let res = str[0].toUpperCase() + str.toLowerCase().slice(1);
    return res;
}

