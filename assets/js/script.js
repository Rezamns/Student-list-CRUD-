const studentTable = document.getElementById('studentTable');

function addStudent() {
    const name = document.getElementById('name').value.trim();
    const studentNumber = document.getElementById('studentNumber').value.trim();

    if (!name || !studentNumber) {
        alert('لطفاً تمامی فیلدها را پر کنید!');
        return;
    }

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${studentNumber}</td>
        <td>
            <button class="action-btn edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    studentTable.appendChild(row);

    document.getElementById('name').value = '';
    document.getElementById('studentNumber').value = '';
}

function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    studentTable.removeChild(row);
}

function editStudent(button) {
    const row = button.parentElement.parentElement;
    const nameCell = row.cells[0];
    const numberCell = row.cells[1];

    const newName = prompt('نام جدید را وارد کنید:', nameCell.textContent);
    const newNumber = prompt('شماره دانشجویی جدید را وارد کنید:', numberCell.textContent);

    if (newName && newNumber) {
        nameCell.textContent = newName;
        numberCell.textContent = newNumber;
    }
}

function searchStudents() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = studentTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const name = rows[i].cells[0].textContent.toLowerCase();
        const studentNumber = rows[i].cells[1].textContent.toLowerCase();

        if (name.includes(searchValue) || studentNumber.includes(searchValue)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}